import assert from "assert";
import transportFee from "../transportFee.js";

describe('Test my transportFeeFunction' , function(){
    it("it should return  return 'R20' if you are working 'morning' shift " , function(){
        assert.equal(transportFee('morning'), 'R20');

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return  return 'R10' if you are working 'afternoon' shift " , function(){
        assert.equal(transportFee('afternoon'), 'R10');

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return  return 'free' if you are working 'nightshift' " , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

        assert.deepEqual([2,2],[2,2]);
    });

});
