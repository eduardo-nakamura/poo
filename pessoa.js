"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(n, i) {
        this.nome = n;
        this.idade = i;
    }
    return Pessoa;
}());
exports.default = Pessoa;
var p1 = new Pessoa("Naka", 36);
console.log("Nome: " + p1.nome + ", Idade: " + p1.idade);
