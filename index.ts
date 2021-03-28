const input1 = document.getElementById("input1") as HTMLInputElement
const input2 = document.getElementById("input2") as HTMLInputElement
const botao = document.getElementById('botao')!

function sum(a: number,b: number){
  return a+b  
}

botao.addEventListener("click",function(){
  console.log(sum(Number(input1.value),Number(input2.value)))
})