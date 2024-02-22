const myFunction = require('./sum')

test('throw on input', () => {
    expect(() => {
        myFunction(1)
    }).toThrow()
})