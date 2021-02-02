abstract class Gato {
  nome: string;
  cor: string;

  constructor(n: string, c: string) {
    this.nome = n;
    this.cor = c;
  }

  public getValues(){
    console.log(`${this.nome}, ${this.cor}`)
  }

  miar(){
    console.log(`${this.nome} miou`)
  }
}

class Fritz extends Gato{
  idade: number;
  constructor(n:string,c:string, i:number){
    super(n,c)
    this.idade = i;
    
  }
}
let gato = new Fritz("Fritz", "Laranja", 2)
gato.getValues()
gato.miar()