"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rato = /** @class */ (function () {
    function Rato(n) {
        this.nome = n;
    }
    Rato.prototype.fugir = function () {
        console.log("Corre, lá vem o Fritz");
    };
    return Rato;
}());
var Mickey = new Rato("Mickey");
Mickey.idade = 'Dois';
console.log(Mickey.nome, Mickey.idade);
Mickey.fugir();
