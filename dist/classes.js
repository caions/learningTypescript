"use strict";
class ticket {
    constructor(nome, prazo, status) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
class programador extends ticket {
    constructor(firstName, linguagem, nome, prazo, status) {
        super(nome, prazo, status);
        this.firstName = firstName;
        this.linguagem = linguagem;
    }
}
const a = new programador("caio", "javascript", "criar o visual do site", "5 dias", "Doing");
console.log(a);
a.setStatus = "Test";
console.log(a);
