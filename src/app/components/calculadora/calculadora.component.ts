import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent 
{




  digito = 0;
  operacion = '';
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  igual = '';

  // anadirDigito() {
  //   if (this.operando == "+" || this.operando == "-") {

  //   }

  // }

  anadirDigito(digito: number) {
    this.numero1 = this.digito;
  }



  anadirResultado(operacion: string) {
    this.operacion = "="
  }

  anadirOperacion(operacion: string) {
    if (this.operacion == '+') {
      this.operacion = "+";
    } else {
      this.operacion = "-";
    }
  }
}