import assert from "assert";
import greet from "../greet.js";

describe('Test my greetFunction' , function(){
    it("it should return 'Obiora' when called with 'Obiora' " , function(){
        assert.equal("Hello, Obiora", greet("Obiora"));    

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return 'John' when called with 'John' " , function(){
       assert.equal("Hello, John", greet("John"));    
   });
    it("it should return 'Chibuzor' when called with 'Chibuzor' " , function(){
       assert.equal("Hello, Chibuzor", greet("Chibuzor"));    
   });

});
