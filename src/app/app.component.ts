import {Component, ViewChild, ElementRef} from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rectangulos';
  // alto : 50
  // ancho: 150

  // Capturamos cada rectangulo
  @ViewChild('rectangulo1', {static: false}) rectangulo1: ElementRef;
  @ViewChild('rectangulo2', {static: false}) rectangulo2: ElementRef;

  posicion1 = {x: 0, y: 0};
  posicion2 = {x: 0, y: 0};

  constructor() {
    // Inicializamos rectangulos en posicion por default
    this.posicion1 = {x: this.posicion1.x, y: this.posicion1.y};
    this.posicion2 = {x: this.posicion2.x + 300, y: this.posicion2.y};
  }

  onDrag(): void { // Funcion activada luego de temrminar el drag event
    const r1: any = this.rectangulo1.nativeElement.getBoundingClientRect();
    const r2: any = this.rectangulo2.nativeElement.getBoundingClientRect();
    console.log('Rectangulo 1', r1);
    console.log('Rectangulo 2:', r2);
    console.log('¿Colisión?: ' + (this.calcularColision(r1, r2) ? 'Siii =(' : 'Nooo :D'));
  }

  calcularColision(r1: any, r2: any): boolean { // Retorna true o false para saber si colisiona o no
    let salida = false;
    if (
      (r1.x < (r2.x + r2.width)) &&
      ((r1.x + r1.width) > r2.x) &&
      (r1.y < (r2.y + r2.height)) &&
      ((r1.height + r1.y) > r2.y)) {
        salida = true;
    }
    return salida;
  }
}
