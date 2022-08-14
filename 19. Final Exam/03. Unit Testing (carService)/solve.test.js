const { expect } = require('chai');
const { carService } = require('./solve');

describe('Testing carService', () => {
    describe('Testing isItExpensive', () => {
        it('If input is Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('if input is not engine or transmission', () => {
            expect(carService.isItExpensive('test')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('Testing discount', () => {
        it('For incorrect input return message', () => {
            expect(carService.discount(0, '0')).to.throw(new Error('Invalid input'));
            expect(carService.discount('0', 0)).to.throw(new Error('Invalid input'));
        });

        it('if numberOfParts is lower than 3', () => {
            expect(carService.discount(2, 6)).to.equal("You cannot apply a discount");
        });

        it('if numberOfParts is higher than 2 and lower or equal to 7 inclusively', () => {
            expect(carService.discount(5, 10)).to.equal(`Discount applied! You saved ${result}$`);
        });

        it('if numberOfParts more than 7', () => {
            expect(carService.discount(10, 20)).to.equal(`Discount applied! You saved ${result}$`);
        });
    });

    describe('Testing partsToBuy', () => {
        it('If partsCatalog is empty return 0', () => {
            expect(carService.partsToBuy([], [{part: "blowoff valve"}])).to.equal(0);
        });

        it('If all data is correct', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], (["blowoff valve"]))).to.equal(145);
        });

        it('For invalid parameters', () => {
            expect(carService.partsToBuy(5, [{part: "blowoff valve"}])).to.throw(new Error('Invalid input'));
            expect(carService.partsToBuy([{part: "blowoff valve"}], 5)).to.throw(new Error('Invalid input'));
        });
    });
});