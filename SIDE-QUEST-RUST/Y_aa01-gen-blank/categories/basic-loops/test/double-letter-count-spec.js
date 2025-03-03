const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const doubleLetterCount = require("../problems/double-letter-count");

describe("doubleLetterCount", function () {
    it('doubleLetterCount("the jeep rolled down the hill") returns 3', function () {
        expect(doubleLetterCount("the jeep rolled down the hill")).to.eq(3);
    });
    it('doubleLetterCount("bootcamp") returns 1', function () {
        expect(doubleLetterCount("bootcamp")).to.eq(1);
    });
});
