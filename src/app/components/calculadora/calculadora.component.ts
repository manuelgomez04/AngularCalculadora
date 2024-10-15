import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {





 
  numero1  ='';
  num = 0;
  num2 = 0;

  resultado = 0;

  // anadirDigito() {
  //   if (this.operando == "+" || this.operando == "-") {

  //   }

  // }

  anadirDigito(digito: string) {
   
    this.numero1 += digito;
   
  }



  anadirResultado(operacion: string) {
    if(operacion === '+') {
      this.resultado = this.num + this.num2;
      this.numero1=this.resultado.toString();
      return this.numero1;
    } else if(operacion === '-') {
      this.resultado = this.num - this.num2;
      this.numero1 = this.resultado.toString();
      return this.numero1;
    } else {
      return this.numero1;
    }
  }

  anadirOperacion(operacion: string) {
    if (operacion === '+' || operacion === '-') {
      this.numero1 = '';
      this.anadirDigito;
      this.num2 = Number(this.numero1);
    } else {
      this.anadirDigito;
      this.num = Number(this.numero1);
    }
  }
}