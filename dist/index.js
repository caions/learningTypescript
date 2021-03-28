"use strict";
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const botao = document.getElementById('botao');
function sum(a, b) {
    return a + b;
}
botao.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
