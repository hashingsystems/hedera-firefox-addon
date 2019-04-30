import Hedera from '../hedera'
import addressbook from '../hedera/address-book'
import dotenv from 'dotenv'
import TransactionBody from '../../pbweb/TransactionBody_pb'
import io from 'socket.io-client'
import debug from 'debug'
import { enumKeyByValue } from './utils'
import { AbiCoder } from 'web3-eth-abi'
import { JSDOM } from 'jsdom'
import path from 'path'
import i from '../hedera/internal'

const log = debug('test:contractcall')

const Tx = TransactionBody.DataCase

test('contractcall test', async () => {
    const testaccount = {
        accountID: process.env.TEST_ACCOUNTID,
        publicKey: process.env.TEST_PUBLICKEY,
        privateKey: process.env.TEST_PRIVATEKEY,
        solidityAddress: process.env.TEST_SOLIDITYADDRESS
    }

    // skip this test completely if developer did not prepare a test account in .env
    if (
        testaccount.accountID === undefined ||
        testaccount.publicKey === undefined ||
        testaccount.privateKey === undefined
    ) {
        return
    }

    const node = addressbook['test'].ADDRESS_BOOK[0]
    const nodeAccount = Object.keys(node)[0]
    const nodeAddress = node[nodeAccount]
    log(nodeAddress)
    log(nodeAccount)
    const hedera = new Hedera.Client(nodeAddress, nodeAccount)
    let keypair = {
        privateKey: testaccount.privateKey,
        publicKey: testaccount.publicKey
    }
    log(keypair)
    let sender = testaccount.accountID
    log(sender)

    // convert user's acccountID (string) into a solidityAddress
    let solidityAddress = i.solidityAddressFromAccountIDString(sender)
    // the converted solidityAddress should be equal to
    // what we put in our testaccount (testdata/account.json)
    if (testaccount.solidityAddress !== undefined) {
        expect(solidityAddress).toEqual(testaccount.solidityAddress)
    }

    let client = hedera.withOperator(keypair, sender).connect()

    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'contractcallexample1.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.contract(document)
    log(result.abi.inputs)
    log(result.params)

    // prepend buyer inputs
    result.abi.inputs.unshift({ name: 'buyer', type: 'address' })
    log(result.abi.inputs)
    // prepend buyer contract account id (translated by Hedera)
    result.params.unshift(solidityAddress)
    log(result.params)

    const abiCoder = new AbiCoder()
    const functionParams = abiCoder.encodeFunctionCall(
        result.abi,
        result.params
    )
    const gas = result.params[2]
    const amount = gas
    const fee = 100000
    const contract = '0.0.1604' // hard-coded contract id. change this to the one Nik uses

    // contract, gas, amount, sender, functionParams, memo, fee
    let q = client
        .contractCall(contract, gas, amount, sender, functionParams, '', fee)
        .prepare()

    // Enable this and invoke against a development payment server to proxy the call to Hedera
    // const CONTRACTCALL = enumKeyByValue(Tx, Tx.CONTRACTCALL)
    // const socket = io.connect('http://localhost:8099')
    // socket.on('connect', function() {
    //     socket.binary(true).emit(CONTRACTCALL, q.data)
    //     socket.on(`${CONTRACTCALL}_RESPONSE`, async function(res) {
    //         log('res', res)
    //     })
    // })
})
