const fetchData = require("./sum")

test('the data is peanut', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch(error){
            done(error)
        }
    }
        fetchData(callback)
})