type status = "Doing" | "Test" | "Done";
abstract class ticket{
  readonly nome:string;
  private prazo:string;
  private status:status
  constructor(nome:string,prazo:string,status:status){
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
  }

  set setStatus(status:status){
    this.status = status;
  }

}
class programador extends ticket{
  readonly firstName:string;
  private linguagem:string;
  constructor(firstName:string,linguagem:string,nome:string,prazo:string,status:status){
    super(nome,prazo,status);
    this.firstName = firstName;
    this.linguagem = linguagem;
  }
}
const a = new programador("caio","javascript","criar o visual do site","5 dias","Doing")

// console.log(a)
// a.setStatus = "Test"
// console.log(a)
