import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Test my yearsAgoFunction' , function(){
    it("it should return return how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))    

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return return how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))    

        assert.deepEqual([2,2],[2,2]);
    });
    

});
