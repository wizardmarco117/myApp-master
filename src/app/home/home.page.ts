import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any[]; // Definimos la propiedad 'datos'

  constructor() {
    // Inicializamos 'datos' con algún contenido
    this.datos = [
      { id: 1, nombre: 'Dato 1' },
      { id: 2, nombre: 'Dato 2' },
      { id: 3, nombre: 'Dato 3' }
    ];
  }

  ngOnInit() {}
}
