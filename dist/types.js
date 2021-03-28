"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//bollean (true/false)
let isOpen;
isOpen = true;
//string ('foo',"foo",`foo`)
let nome = "Caio";
//number (int,float,hex,binary)
let numero;
numero = 878.8, 10;
//array
let frutas;
frutas = ["maça", "banana", "uva"];
let valores;
valores = [1, 10, 55];
//tuple
let dados;
dados = ["caio", 33];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any
let coisa;
coisa = "nome";
coisa = 12345;
coisa = [564, "foo"];
// void (tipar funcoes que não retornam nada)
function logger() {
    console.log('foo');
}
// null || undefined
let teste;
teste;
//never
function error() {
    throw new Error("error");
}
//object
let car;
car = {
    nome: "Monza",
    ano: 1980
};
// Type inferece
let inference = "mensagem";
inference = "outra mensagem";
// inference = 123 erro
window.addEventListener("click", (e) => {
    console.log(e.target);
});
