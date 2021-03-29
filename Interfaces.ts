interface IEspecial{
  lancar():void
  furia():void
}

class superHeroi implements IEspecial{
  constructor(readonly nome:string,private forca:number,private magia:number){}
  lancar(){
    //console.log(`${this.nome} lançou o poder`)
  }
  furia(){
    this.forca = this.forca +100
    this.magia = this.magia -30
  }
}

const homemAranha = new superHeroi("Peter",50,30)
// console.log(homemAranha)
// homemAranha.furia()
// console.log(homemAranha)