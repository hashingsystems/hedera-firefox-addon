import Hedera from '../hedera'
import { JSDOM } from 'jsdom'
import path from 'path'
import debug from 'debug'

const log = debug('test:hedera')

test('When document object is invalid', () => {
    let result = Hedera.micropayment(null)
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is VALID', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample1.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    log(result)
    expect(result).toEqual({
        recipientList: [
            {
                tinybars: '444',
                to: '0.0.1003'
            }
        ],
        time: '1',
        submissionNode: undefined,
        paymentServer: 'http://localhost:8099',
        contentID: 'test1',
        memo: 'test1',
        type: 'article',
        extensionId: 'pggademcllgdajmghcgeidpcbllikmcp'
    })
})

test('When hedera-micropayment tag is INVALID - does not contain recipientList', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample2.html')
    let dom = await JSDOM.fromFile(testFile)
    // get the document object that we can operate on
    let document = dom.window.document
    // test it
    let result = Hedera.micropayment(document)
    // since publisherexample1.html has an old tag that does not have recipientList, it should fail
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is INVALID - recipientList amount is empty', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample3.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is INVALID - recipientList accountID is invalid', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample4.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is INVALID - accountID is invalid', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample4.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is INVALID - submissionNode account is invalid', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample5.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toBe(false)
})

test('When hedera-micropayment tag is VALID - paymentserver is valid', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample6.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toEqual({
        recipientList: [
            {
                tinybars: '444',
                to: '0.0.1003'
            }
        ],
        time: '1',
        submissionNode: '0.0.3',
        paymentServer: 'http://localhost:8099',
        contentID: 'test1',
        memo: 'test1',
        type: 'article',
        extensionId: 'ajeohoociaeemadgmpfdkcbhmloppohn'
    })
})

test('When hedera-micropayment tag is INVALID - paymentserver is invalid', async () => {
    // retrieve test HTML from testdata directory and pass it to JSDOM
    let testFile = path.join(__dirname, 'testdata', 'publisherexample7.html')
    let dom = await JSDOM.fromFile(testFile)
    let document = dom.window.document
    let result = Hedera.micropayment(document)
    expect(result).toBe(false)
})
