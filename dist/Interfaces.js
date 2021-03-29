"use strict";
class superHeroi {
    constructor(nome, forca, magia) {
        this.nome = nome;
        this.forca = forca;
        this.magia = magia;
    }
    lancar() {
        //console.log(`${this.nome} lançou o poder`)
    }
    furia() {
        this.forca = this.forca + 100;
        this.magia = this.magia - 30;
    }
}
const homemAranha = new superHeroi("Peter", 50, 30);
// console.log(homemAranha)
// homemAranha.furia()
// console.log(homemAranha)
