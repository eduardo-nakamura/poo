export default class Animal {
  tipo: string;
  nome: string;
  idade: number;

  constructor(t: string, n:string, i: number){
    this.tipo = t
    this.nome = n
    this.idade = i
  }

  public comunicar(): void{
    console.log("Ola")
  }
}

class Cachorro extends Animal {
  raça: string
  constructor(t: string, n:string, i: number, r:string){
    super(t, n, i)
    this.raça = r
  }

  public comunicar(): void{
    console.log("Au Au")
  }
}

class Gente extends Animal {
  cor: string
  constructor(t: string, n:string, i: number, c:string){
    super(t, n, i)
    this.cor = c
  }

  public comunicar(): void{
    console.log("Saudações")
  }
}

let c1 = new Cachorro("cachorro", "box", 2, "poodle")
let p1 = new Gente("Humano", "Takeshi", 25, "Asiatico")

console.log(c1.comunicar(),p1.comunicar())