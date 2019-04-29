import testAccount1 from './testdata/account'
import Account from './account'

test('Instantiate account, getDetails, setDetails', async () => {
    let a = await new Account().init('')
    expect(a).toBeUndefined()

    a = await new Account().init('1')
    expect(a).toBeUndefined()

    a = await new Account().init('0.1')
    expect(a).toBeUndefined()

    a = await new Account().init('0.0.1')
    expect(a).toBeInstanceOf(Account)
    let details = await a.getDetails()
    expect(details).toEqual({ accountID: '0.0.1' })

    // This time, it will work because 0.0.1000 matches
    // testAccount1.accountID's value (0.0.1000)
    a = await new Account().init('0.0.1000')
    const spy = jest.spyOn(a, 'setDetails')
    await a.setDetails(testAccount1)
    expect(spy).toHaveBeenCalled()

    // and the details are properly set, since we can retrieve them
    expect(a.getDetails()).resolves.toEqual(testAccount1)
})

test('Using init() to initialise our account object in ONE step with local storage', async () => {
    // we should be able to write
    // let a = await new Account(testAccount1).initAsync()
    let a = await new Account().init(testAccount1)
    let details = await a.getDetails()
    expect(details.accountID).toBe('0.0.1000')
})
