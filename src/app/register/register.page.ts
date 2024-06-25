import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = ''; // Inicializamos name
  password: string = ''; // Inicializamos password

  constructor(private router: Router) {}

  register() {
    // Aquí puedes añadir la lógica para registrar el usuario
    console.log('Usuario registrado:', this.name);
    this.router.navigate(['/login']);
  }
}
