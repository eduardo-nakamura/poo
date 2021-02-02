"use strict";
var Carro = /** @class */ (function () {
    function Carro(c, a, v) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Carro.prototype.getLog = function () {
        this.getInfo();
    };
    Carro.prototype.getInfo = function () {
        console.log(this.cor + ", " + this.ano + ", " + this.getValor());
    };
    return Carro;
}());
var c = new Carro("Preto", 2020, 20000);
// c.setValor(100000)
// console.log(c.getValor())
c.getLog();
