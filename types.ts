import { any } from "sequelize/types/lib/operators"

//bollean (true/false)
let isOpen: boolean
isOpen = true

//string ('foo',"foo",`foo`)
let nome: string = "Caio"

//number (int,float,hex,binary)
let numero: number
numero = 878.8,10

//array
let frutas: Array<string>
frutas = ["maça","banana","uva"]

let valores: number[]
valores = [1,10,55]

//tuple
let dados: [string,number]
dados = ["caio",33]

// enum
enum Colors{
  white = '#fff',
  black = '#000'
}

//any
let coisa: any
coisa = "nome"
coisa = 12345
coisa = [564,"foo"]

// void (tipar funcoes que não retornam nada)
function logger():void{
  console.log('foo')
}

// null || undefined
let teste: string | null | undefined
teste

//never
function error(): never{
  throw new Error("error")
}

//object
let car: object
car = {
  nome:"Monza",
  ano: 1980
}
