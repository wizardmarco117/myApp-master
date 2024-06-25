import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  name: string = ''; // Inicializamos name
  password: string = ''; // Inicializamos password

  constructor(private router: Router) {}

  login() {
    // Aquí puedes añadir la lógica para autenticar el usuario
    console.log('Usuario autenticado:', this.name);
    this.router.navigate(['/forum']);
  }
}
