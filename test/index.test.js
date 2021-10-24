//index.test.js
const { expect } = require('@jest/globals');
const index = require('../index');

test('it works', () => {
    const result = index.itWorks();
    expect(result).toEqual(1);
})

test('should return fizz for divisible by 3 only', () => {
    const result = index.fizzBuzz(6);
    expect(result).toEqual('fizz');
})

test('should return buzz for divisible by 5 only', () => {
    const result = index.fizzBuzz(10)
    expect(result).toEqual('buzz')
})

test('should return fizzbuzz for divisible by 3 and by 5', () => {
    const result = index.fizzBuzz(15)
    expect(result).toEqual('fizzbuzz')
})
