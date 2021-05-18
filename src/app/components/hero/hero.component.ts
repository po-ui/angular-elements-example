import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  numberOne: number;
  numberTwo: number;
  resultado: number;
  constructor() { }

  ngOnInit(): void {
  }

  calcula(operador: string) {
    switch(operador) {
      case 'soma':
        this.resultado = this.numberOne + this.numberTwo
        break;
      case 'subtração':
        this.resultado = this.numberOne - this.numberTwo;
        break;
      case 'multiplicação':
        this.resultado = this.numberOne * this.numberTwo;
        break;
      case 'divisão':
        if (this.numberTwo === 0) {
          console.error('Não é possível dividir por zero');
          this.resultado = 0;
        } else {
          this.resultado = this.numberOne / this.numberTwo;
        }
        break;
      default:
        console.error('Deve informar qual operador');
        break;
    }
    console.log(
      (
        this.numberTwo === 0 && operador === 'divisão'
        ? 'Não é possível dividir por zero'
        : `A ${operador} entre ${this.numberOne} e ${this.numberTwo} é igual a ${this.resultado}`
      )
    );
    this.mandaValor();

  }

  private mandaValor() {
    document.dispatchEvent(
      new CustomEvent('emitValue', {
        detail: [
          {
            value: this.resultado,
            name: 'result',
            action: () => {
              const element = document.getElementById('resultado');
              console.log({element});
            }
          }
        ]
      })
    );
  }

}
