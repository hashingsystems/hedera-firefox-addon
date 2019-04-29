import Dinero from 'dinero.js'
import {
    tinyBarsToDollarsUnit,
    tinyBarsToDollarsCurr,
    dollarsToTinyBarsUnit,
    dollarsToTinyBarsCurr,
    tinyBarsToHBarsUnit,
    tinyBarsToHBarsCurr,
    hBarsToTinyBarsUnit,
    hBarsToTinyBarsCurr,
    dollarsToHbarsCurr,
    hBarsToDollarsCurr
} from './currency'

test('conversion', () => {
    // log("conversion")
    // log(tinyBarsToDollarsCurr(100000000))
})

test('1 USD as a Dinero object', () => {
    let one = Dinero({
        amount: 100,
        currency: 'USD'
    }).toFormat()
    expect(one).toBe('$1.00')
})

test('construct a custom currency', () => {
    // 5 hBars, since Dinero assumes X100
    let d = Dinero({
        amount: 500
    })
    let hBarString = d.toFormat().substr(1)
    let hBar = `${hBarString} ℏ`
    expect(hBar).toBe('5.00 ℏ')
})

test('tinyBars to hBars currency', () => {
    let tBarsToHBarsCurr = tinyBarsToHBarsCurr(110000000000000000, 2)
    expect(tBarsToHBarsCurr).toBe('1100000000.00 ℏ')

    let tBarsToHBarsCurr1 = tinyBarsToHBarsCurr(898356632927)
    expect(tBarsToHBarsCurr1).toBe('8983.56632927 ℏ')

    let tBarsToHBarsCurr2 = tinyBarsToHBarsCurr(1)
    expect(tBarsToHBarsCurr2).toBe('0.00000001 ℏ')

    let tBarsToHBarsCurr3 = tinyBarsToHBarsCurr(999900099000, 8)
    expect(tBarsToHBarsCurr3).toBe('9999.00099000 ℏ')
})

test('tinyBars to hBars unit', () => {
    let tinyBarsToHBarsU = tinyBarsToHBarsUnit(100000000)
    expect(tinyBarsToHBarsU).toBe(1)

    let tinyBarsToHBarsU2 = tinyBarsToHBarsUnit(1)
    expect(tinyBarsToHBarsU2).toBe(0.00000001)

    let tinyBarsToHBarsU1 = tinyBarsToHBarsUnit(898356632927)
    expect(tinyBarsToHBarsU1).toBe(8983.56632927)
})

test('tinyBars to Dollars currency', () => {
    let tBarsToDollarsCurr = tinyBarsToDollarsCurr(110000000000000000)
    expect(tBarsToDollarsCurr).toBe('$132,000,000.00')
})

test('tinyBars to Dollars unit', () => {
    let tinyBarsToDolsU = tinyBarsToDollarsUnit(100000000)
    expect(tinyBarsToDolsU).toBe(0.12)

    let tinyBarsToDolsU1 = tinyBarsToDollarsUnit(1) // smallest currency in tinybars
    expect(tinyBarsToDolsU1).toBe(0.0000000012)

    let tinyBarsToDolsU2 = tinyBarsToDollarsUnit(0.1)
    expect(tinyBarsToDolsU2).toBe(0)

    let tinyBarsToDolsU3 = tinyBarsToDollarsUnit(0)
    expect(tinyBarsToDolsU3).toBe(0)

    let tinyBarsToDolsU4 = tinyBarsToDollarsUnit(4666668) // tinyBars.toFix(3) returns a rounded up string
    expect(tinyBarsToDolsU4).toBe(0.0056000016)
})

test('hBars to tinyBars currency', () => {
    let hBarsTotinyBarsC = hBarsToTinyBarsCurr(1)
    expect(hBarsTotinyBarsC).toBe('100,000,000.00 tℏ')
})

test('hBars to tinyBars unit', () => {
    let hBarsTotinyBarsU = hBarsToTinyBarsUnit(1)
    expect(hBarsTotinyBarsU).toBe(100000000)
})

test('hBars to Dollars currency', () => {
    let hBarsToDol = hBarsToDollarsCurr(1)
    expect(hBarsToDol).toBe('$0.12')
})

test('Dollars to tinyBars currency', () => {
    let dolToTinyBarsCurr = dollarsToTinyBarsCurr(0.12)
    expect(dolToTinyBarsCurr).toBe('100,000,000.00 tℏ')

    let dolToTinyBarsCurr1 = dollarsToTinyBarsCurr(0.00499)
    expect(dolToTinyBarsCurr1).toBe('4,158,333.25 tℏ')

    let dolToTinyBarsCurr2 = dollarsToTinyBarsCurr(0.00479)
    expect(dolToTinyBarsCurr2).toBe('3,991,666.67 tℏ')
})

test('dollars to tinyBars unit', () => {
    let dollarsToTinyBarsU = dollarsToTinyBarsUnit(0.12)
    expect(dollarsToTinyBarsU).toBe(100000000)

    let dollarsToTinyBarsU1 = dollarsToTinyBarsUnit(0.0000000012) // smallest currency in USD
    expect(dollarsToTinyBarsU1).toBe(1)

    let dollarsToTinyBarsU2 = dollarsToTinyBarsUnit(0.0304)
    expect(dollarsToTinyBarsU2).toBe(25333333)
})

test('Dollars to hBars currency', () => {
    let dolToHbars = dollarsToHbarsCurr(0.12)
    expect(dolToHbars).toBe('1.00 ℏ')

    let dolToHbars1 = dollarsToHbarsCurr(0.00499)
    expect(dolToHbars1).toBe('0.04 ℏ')

    let dolToHbars2 = dollarsToHbarsCurr(0.00479)
    expect(dolToHbars2).toBe('0.04 ℏ')
})
