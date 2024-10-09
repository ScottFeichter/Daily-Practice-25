const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const snakeToCamel = require("../problems/snake-to-camel");

describe("snakeToCamel", function () {
    it("snakeToCamel('snakes_go_hiss') returns SnakesGoHiss", function () {
        expect(snakeToCamel('snakes_go_hiss')).to.eq('SnakesGoHiss');
    });
    it("snakeToCamel('say_hello_world') returns SayHelloWorld", function () {
        expect(snakeToCamel('say_hello_world')).to.eq('SayHelloWorld');
    });
    it("snakeToCamel('app_academy_is_cool') returns AppAcademyIsCool", function () {
        expect(snakeToCamel('app_academy_is_cool')).to.eq('AppAcademyIsCool');
    });
    it("snakeToCamel('APp_ACADEMY_iS_cOol') returns AppAcademyIsCool", function () {
        expect(snakeToCamel('APp_ACADEMY_iS_cOol')).to.eq('AppAcademyIsCool');
    });
});
