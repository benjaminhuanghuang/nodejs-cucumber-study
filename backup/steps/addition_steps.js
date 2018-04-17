const expect = require('chai').expect;

module.exports = function () {
    let answer = 0;

    Given('I start with {int}', function (input) {
        answer = input;
    });

    When('I add {int}', function (input){
        answer = answer + input;
    });

    Then('I end up with {int}', function (input){
        expect(answer).to.equal(input);
    });
};