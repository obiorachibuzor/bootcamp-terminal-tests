var assert = require('assert')
var greetme = require('../functions').greet
var allFromTown = require('../functions').allFromTown
var transportFee = require('../functions').transportFee
var profitableDept = require('../functions').profitableDept

describe('App', function () {
    it('greet me must greet me', function () {
        let name = 'Obiora'
        let results = greetme(name)
        assert.equal(results, `Hello, ${name}`)
    }),
    it('returns car registraions from town',()=>{
        let results = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ')
        assert.deepEqual(results,['CJ 456'])
    }),
    it('determine which departments are the most profitable',()=>{

        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];

        let results = profitableDept(salesData)
        assert.equal('outdoor', results, "Most profitable department is 'outdoor' for dataset 1");
    }),
    it('should return transport fee for the given shift param',function(){
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');

        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })

})
