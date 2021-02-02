export default interface Roedor{
  nome:string;
  idade?:number | string;
  fugir(): void
}

class Rato implements Roedor{
  nome: string;
  idade?: number | string;
  constructor(n: string ){
    this.nome = n

  }

  fugir(){
    console.log("Corre, lá vem o Fritz")
  }
}

let Mickey = new Rato("Mickey")
Mickey.idade = 'Dois'
console.log(Mickey.nome,Mickey.idade)
Mickey.fugir()