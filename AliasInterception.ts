type heroi = {
  poder: string,
}
type identidade = {
  nome: string,
  idade?: number
}

type Heroirevelado = heroi & identidade

const homemDeFerro: Heroirevelado = {
  nome: "Tony",
  poder: "Intelectual,filantropo..."
}

const homeAranha: heroi = {
  poder: "Escalar paredes",
}

const superman: heroi = {
  poder: "todos"
}