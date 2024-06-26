import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage {
  comment = {
    name: '',
    message: ''
  };

  constructor(private http: HttpClient, private alertController: AlertController) {}

  async sendComment(event: Event) {
    event.preventDefault();
    const formspreeUrl = 'https://formspree.io/f/mnnaaraq'; // Usa tu URL de Formspree
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.comment);

    this.http.post(formspreeUrl, body, { headers }).subscribe(async response => {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu comentario ha sido enviado.',
        buttons: ['OK']
      });
      await alert.present();
      this.comment = { name: '', message: '' }; // Limpiar el formulario
    }, async error => {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al enviar tu comentario. Inténtalo de nuevo más tarde.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }
}
