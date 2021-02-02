class Carro {
  private cor: string;
  private ano: number;
  private valor: number;
  
  constructor(c: string, a: number, v: number) {
    this.cor = c;
    this.ano = a;
    this.valor = v;
  }

  public getValor(){
    return this.valor
  }

  public setValor(valor: number){
    this.valor = valor
  }

  public getLog(){
    this.getInfo()
  }

  private getInfo(){
    console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`)
  }
}

let c = new Carro("Preto", 2020,20000)

// c.setValor(100000)
// console.log(c.getValor())
c.getLog()