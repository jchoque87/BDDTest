const {Given, When, Then} = require("@cucumber/cucumber")
const {expect} = require("chai")

class Calcuadora{
    suma(a, b){
        return a + b;
    }
}

let calculator
let result


Given('Una Calcuadora', function () {
    calculator = new Calcuadora();
});

When('Se ingresa {int} y {int}', function (int, int2) {
    result = calculator.suma(int, int2);
});

Then('El resultado debe ser {int}', function (int) {
    expect(result).to.be.equal(int)
});