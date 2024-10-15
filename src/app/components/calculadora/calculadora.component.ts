import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})

// export class CalculadoraComponent {
//   numero1: string = '';
//   acumulador: number = 0;
//   signo: string = '';
//   resultado: number = 0;

//   anadirDigito(digito: string) {
//     this.numero1 += digito;
//   }

//   anadirOperacion(operacion2: string) {

//     if (this.numero1 !==''){

//     }

//   }

//   anadirResultado() {
//     this.acumulador = Number(this.numero1);

//     if (this.signo === '+') {
//       this.resultado = this.acumulador + this.acumulador;
//     } else if (this.signo === '-') {
//       this.resultado = this.acumulador - this.acumulador;
//     }

//     this.numero1 = this.resultado.toString();
//   }


//   //Limpiar pantalla
//   limpiarPantalla(){
//     this.numero1 = '';
//     this.acumulador = 0;
//     this.signo = '';
//     this.resultado = 0;
//   }
// }
export class CalculadoraComponent {
  numero1: string = '';
  acumulador: number = 0;
  signo: string = '';
  resultado: number = 0;

  anadirDigito(digito: string) {
    this.numero1 += digito;
  }

  anadirOperacion(operacion: string) {
    if (this.numero1 !== '') {
      if (this.signo !== '') {
        this.realizarOperacion();
      } else {
        this.acumulador = Number(this.numero1);
      }
      this.signo = operacion;
      this.numero1 = '';
    }
  }

  realizarOperacion() {
    const num = Number(this.numero1);
    if (this.signo === '+') {
      this.acumulador += num;
    } else if (this.signo === '-') {
      this.acumulador -= num;
    }
  }

  anadirResultado() {
    if (this.numero1 !== '') {
      this.realizarOperacion();
      this.numero1 = this.acumulador.toString();
      this.signo = '';
    }
  }

  limpiarPantalla() {
    this.numero1 = '';
    this.acumulador = 0;
    this.signo = '';
    this.resultado = 0;
  }
}