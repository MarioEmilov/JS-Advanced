const isOddOrEven = require('./2-even-or-odd');
const { expect, assert } = require('chai');

describe('isOddOrEven function test', () => {
    //invalid input
    it('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    //valid input
    it('should return even as restul', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return odd as restul', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});