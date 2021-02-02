"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gato = /** @class */ (function () {
    function Gato(n, c) {
        this.nome = n;
        this.cor = c;
    }
    Gato.prototype.getValues = function () {
        console.log(this.nome + ", " + this.cor);
    };
    Gato.prototype.miar = function () {
        console.log(this.nome + " miou");
    };
    return Gato;
}());
var Fritz = /** @class */ (function (_super) {
    __extends(Fritz, _super);
    function Fritz(n, c, i) {
        var _this = _super.call(this, n, c) || this;
        _this.idade = i;
        return _this;
    }
    return Fritz;
}(Gato));
var gato = new Fritz("Fritz", "Laranja", 2);
gato.getValues();
gato.miar();
