import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any[] = [];

  constructor() {}

  ngOnInit() {
    this.obtenerDatos();
  }

  async obtenerDatos() {
    try {
      const response = await axios.get('http://localhost:3000/api/datos');
      this.datos = response.data;
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  }
}
