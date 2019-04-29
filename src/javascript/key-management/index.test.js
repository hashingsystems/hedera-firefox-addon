// import { decryptAccountDetails } from '../../javascript/key-management'
// import accountDetails from '../testdata/accountdetails'
// import pairing from '../testdata/pairing'
// import forge from 'node-forge'
import debug from 'debug'

const log = debug('test:key-management')

// const CRYPTO_TEST = false

// test('this is our test accountDetails', () => {
//     if (accountDetails) {
//         log('Test accountDetails is provided. Thanks.')
//     } else {
//         log('Please provide test account details.')
//     }
// })

// test('sha384 in JavaScript', () => {
//     // given the exact same message, our sha384 output will always be the same
//     let message = 'abc'
//     let md = forge.md.sha384.create()
//     md.update(message)
//     let mdHex = md.digest().toHex()
//     let md2 = forge.md.sha384.create()
//     md2.update(message)
//     let md2Hex = md.digest().toHex()
//     expect(mdHex).toBe(md2Hex)

//     // if the ordering is wrong, the message digest will of course not be equal
//     let message2 = 'acb'
//     let md3 = forge.md.sha384.create()
//     md3.update(message2)
//     let md3Hex = md3.digest().toHex()
//     expect(md3Hex).not.toBe(mdHex)
// })

// test('this is our pairing test data', () => {
//     if (pairing === undefined) {
//         log('Please provide test pairing details.')
//     }
// })

// test('deciphering', () => {
//     if (CRYPTO_TEST === false) {
//         log('skip crypto test')
//         return
//     }
//     let encrypted = pairing.jsonData.data
//     let key = pairing.key
//     let encryptedString = forge.util.decode64(encrypted)

//     let bbytes = new Uint8Array(encryptedString.length)
//     for (let i = 0; i < encryptedString.length; i++) {
//         bbytes[i] = encryptedString.charCodeAt(i)
//     }

//     let byteBufferStringRequiredByForge = forge.util.createBuffer(bbytes.buffer)
//     // decipher decrypt
//     let decipher = forge.cipher.createDecipher('AES-CTR', key)
//     let iv = forge.util.createBuffer()
//     decipher.start({
//         iv: iv
//     })
//     decipher.update(byteBufferStringRequiredByForge)
//     // let result = decipher.finish()

//     let combine = decipher.output.getBytes()
//     let comp1 = combine.slice(0, length - 48)
//     let comp2 = combine.slice(length - 48)

//     // use comp1 to recreate SHA384 message digest
//     let decipheredAccountDetails = comp1
//     let b = JSON.stringify(decipheredAccountDetails)
//     let c = JSON.parse(b)

//     let md = forge.md.sha384.create()
//     md.update(c)
//     let accountDetailsBytes = md.digest().getBytes()
//     let comp1HexString = forge.util.bytesToHex(accountDetailsBytes)
//     let comp1ByteArray = toByteArray(comp1HexString)
//     let shaComp1MsgDigest = comp1ByteArray

//     // use comp2 from bytes to readable byte array
//     let comp2HexString = forge.util.bytesToHex(comp2)
//     let comp2ByteArray = toByteArray(comp2HexString)
//     let comp2MsgDigest = comp2ByteArray

//     let msgDigestEquals = dataViewsAreEqual(shaComp1MsgDigest, comp2MsgDigest)
//     log(msgDigestEquals)
//     expect(shaComp1MsgDigest).toEqual(comp2MsgDigest)
// })

// // compare DataViews
// function dataViewsAreEqual(a, b) {
//     if (a.length !== b.length) return false
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) return false
//     }
//     return true
// }

// function toByteArray(hexString) {
//     var result = []
//     while (hexString.length >= 2) {
//         result.push(parseInt(hexString.substring(0, 2), 16))
//         hexString = hexString.substring(2, hexString.length)
//     }
//     return result
// }

test('slicing', () => {
    //     let encrypted = pairing.jsonData.data
    //     let key = pairing.key
    //     let encryptedString = forge.util.decode64(encrypted)
    //     let bbytes = new Uint8Array(encryptedString.length)
    //     for (let i = 0; i < encryptedString.length; i++) {
    //         bbytes[i] = encryptedString.charCodeAt(i)
    //     }
    //     let byteBufferStringRequiredByForge = forge.util.createBuffer(bbytes.buffer)
    //     // decipher decrypt
    //     let decipher = forge.cipher.createDecipher('AES-CTR', key)
    //     let iv = forge.util.createBuffer()
    //     decipher.start({
    //         iv: iv
    //     })
    //     decipher.update(byteBufferStringRequiredByForge)
    //     let combine = decipher.output.getBytes()
    //     let slice1 = combine.slice(0, length - 47)
    //     let slice2 = combine.slice(0, length - 48)
    //     let slice3 = combine.slice(0, length - 49)
    //     let slice4 = combine.slice(1, length - 47)
    //     let slice5 = combine.slice(1, length - 48)
    //     let slice6 = combine.slice(1, length - 49)
    //     let slice7 = combine.slice(length - 48)
    //     let slice8 = combine.slice(length - 49, length - 1)
    //     let slice10 = combine.slice(length - 48, length - 1)
    //     let slice12 = combine.slice(length - 47, length - 1)
    //     // log(slice1)
    //     // log(slice1.length)
    //     // log(slice2)
    //     // log(slice2.length)
    //     // log(slice3)
    //     // log(slice3.length)
    //     // log(slice4)
    //     // log(slice4.length)
    //     // log(slice5)
    //     // log(slice5.length)
    //     // log(slice6)
    //     // log(slice6.length)
    //     // log(slice7)
    //     // log(slice7.length)
    //     // log(slice8)
    //     // log(slice8.length)
    //     // log(slice10)
    //     // log(slice10.length)
    //     // log(slice12)
    //     // log(slice12.length)
})
