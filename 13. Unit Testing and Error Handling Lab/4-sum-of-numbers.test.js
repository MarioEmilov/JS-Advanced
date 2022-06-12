const sum = require('./4-sum-of-numbers');

describe('sum of numbers test suit', () => {

    it('Sum is a function', () => {
        expect(typeof sum).to.equal("function")
    });

    it('sum computes [1,1] => 2', () => {
        expect(sum([1, 1])).to.equal(2)
    });

    it('sum computes [-1,1] => 0', () => {
        expect(sum([-1, 1])).to.equal(0)
    });

});