export default class Animal {
  private tipo: string;
  private nome: string;
  private idade: number;

  constructor(t: string, n:string, i: number){
    this.tipo = t
    this.nome = n
    this.idade = i
  }

  protected comunicar(): void{
    console.log("Ola")
  }
}

class Cachorro extends Animal {
  raça: string
  constructor(t: string, n:string, i: number, r:string){
    super(t, n, i)
    this.raça = r
  }

  public latir(): void{
    super.comunicar()
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

console.log(c1.latir(),p1.comunicar())