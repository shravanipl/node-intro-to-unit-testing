const expect = require('chai').expect;
const fizzbuzz = require('../fizzBuzzer');

describe ('fizzBuzzer', function(){
  it('should check if returns expected value',function(){
       const cases = [
           {num : 30, expected:'fizz-buzz'},
           {num: 10, expected:'buzz'},
           {num: 9, expected:'fizz'},
       ];
      cases.forEach(function(input){
        const answer = fizzbuzz(input.num);
        expect(answer).to.equal(input.expected);
      });
  })
});

describe('fizzBuzzer',function(){
 it('should throw error if Nan', function(){
    expect(function() {
      fizzbuzz('ssss123@@');
    }).to.throw(Error);
});
    
 });
