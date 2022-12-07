describe("motorcycleRider", function () {
    describe("licenseRestriction ", function () {
        it("check for invalid parameters", function () {
            let expected = "Invalid Information!"

            expect(() => { motorcycleRider.licenseRestriction(`a1`) }).to.throw(expected);
            expect(() => { motorcycleRider.licenseRestriction(`b1`) }).to.throw(expected);
            expect(() => { motorcycleRider.licenseRestriction(6) }).to.throw(expected);
        });
        it(`valid parameters`, () => {
            let expected = "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
            let actual = motorcycleRider.licenseRestriction(`AM`);
            expect(actual).to.equal(expected);

            expected = "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
            actual = motorcycleRider.licenseRestriction(`A1`);
            expect(actual).to.equal(expected);

            expected = "Motorcycles with maximum power of 35KW. and the minimum age is 18."
            actual = motorcycleRider.licenseRestriction(`A2`);
            expect(actual).to.equal(expected);

            expected = "No motorcycle restrictions, and the minimum age is 24."
            actual = motorcycleRider.licenseRestriction(`A`);
            expect(actual).to.equal(expected);
        })

    });

    describe(`motorcycleShowroom `, () => {
        it(`check for invalid parameters`, () => {
            let expected = "Invalid Information!";

            expect(() => { motorcycleRider.motorcycleShowroom(`array`, `6`) }).to.throw(expected);

            expect(() => { motorcycleRider.motorcycleShowroom([1], `6`) }).to.throw(expected);

            expect(() => { motorcycleRider.motorcycleShowroom(`array`, 6) }).to.throw(expected);

            expect(() => { motorcycleRider.motorcycleShowroom([], 50) }).to.throw(expected);

            expect(() => { motorcycleRider.motorcycleShowroom([1], 49) }).to.throw(expected);
        })

        it(`valid parameters`, () => {
            let expected = `There are 2 available motorcycles matching your criteria!`
            let actual = motorcycleRider.motorcycleShowroom([`125`, `250`, `600`], 300);
            expect(actual).to.be.equal(expected);

            expected = `There are 1 available motorcycles matching your criteria!`
            actual = motorcycleRider.motorcycleShowroom([`125`, `250`, `600`], 249);
            expect(actual).to.be.equal(expected);

            expected = `There are 0 available motorcycles matching your criteria!`
            actual = motorcycleRider.motorcycleShowroom([`125`, `250`, `600`], 124);
            expect(actual).to.be.equal(expected);
        })
    })

    describe(`motorcycleShowroom `, () => {
        it(`check for invalid parameters`, () => {
            let expected = "Invalid Information!";

            expect(() => { motorcycleRider.otherSpendings([], [], `bool`) }).to.throw(expected);

            expect(() => { motorcycleRider.otherSpendings([], `6`, true) }).to.throw(expected);

            expect(() => { motorcycleRider.otherSpendings(`array`, [`6`], true) }).to.throw(expected);
        })
        it(`valid parameters`, () => {
            let expected = `You spend $600.00 for equipment and consumables!`
            let actual = motorcycleRider.otherSpendings([`helmet`, `jacked`], [`engine oil`, `oil filter`], false)
            expect(actual).to.equal(expected);

            expected = `You spend $200.00 for equipment and consumables!`
            actual = motorcycleRider.otherSpendings([`helmet`], [], false)
            expect(actual).to.equal(expected);

            expected = `You spend $300.00 for equipment and consumables!`
            actual = motorcycleRider.otherSpendings([`jacked`], [], false)
            expect(actual).to.equal(expected);

            expected = `You spend $70.00 for equipment and consumables!`
            actual = motorcycleRider.otherSpendings([], [`engine oil`], false)
            expect(actual).to.equal(expected);

            expected = `You spend $30.00 for equipment and consumables!`
            actual = motorcycleRider.otherSpendings([], [`oil filter`], false)
            expect(actual).to.equal(expected);
            
            expected = `You spend $540.00 for equipment and consumables with 10% discount!`
            actual = motorcycleRider.otherSpendings([`helmet`, `jacked`], [`engine oil`, `oil filter`], true)
            expect(actual).to.equal(expected);

            expected = `You spend $567.00 for equipment and consumables with 10% discount!`
            actual = motorcycleRider.otherSpendings([`helmet`, `jacked`], [`engine oil`, `oil filter`, `oil filter`], true)
            expect(actual).to.equal(expected);
        })
    });
});