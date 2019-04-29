import Hedera from '../hedera'
import addressbook from '../hedera/address-book'
import testaccount from '../hedera/testdata/account.json'
import { enumKeyByValue } from '../hedera/utils'
import { Query } from '../../pbweb/Query_pb'
import io from 'socket.io-client'
import debug from 'debug'

const log = debug('test:hedera:cryptogetinfo')

const Q = Query.QueryCase

test('cryptogetinfo', async done => {
    const node = addressbook['test'].ADDRESS_BOOK[0]
    const nodeAccount = Object.keys(node)[0]
    const nodeAddress = node[nodeAccount]
    const hedera = new Hedera.Client(nodeAddress, nodeAccount)
    let keypair = {
        privateKey: testaccount.privateKey,
        publicKey: testaccount.publicKey
    }
    let sender = testaccount.accountID
    let client = hedera.withOperator(keypair, sender).connect()

    let q = client.cryptoGetInfo(sender, 'cryptoGetInfo').prepare()

    const CRYPTOGETINFO = enumKeyByValue(Q, Q.CRYPTOGETINFO)
    const socket = io.connect('http://localhost:8099')
    socket.on('connect', function() {
        socket.binary(true).emit(CRYPTOGETINFO, q.data)
        socket.on(`${CRYPTOGETINFO}_RESPONSE`, async function(res) {
            log('res', res)
        })
    })
    done()
})
