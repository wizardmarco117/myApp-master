import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage {
  products: Product[] = [
    {
      name: 'Arduino UNO',
      image: 'assets/img/uno1.png',
      price: 25,
      description: 'Descripción del Arduino UNO.'
    },
    {
      name: 'Sensor de Temperatura',
      image: 'assets/img/sen1.png',
      price: 5,
      description: 'Descripción del Sensor de Temperatura.'
    },
    {
      name: 'Código para Proyectos',
      image: 'assets/img/code.png',
      price: 15,
      description: 'Descripción del código disponible para proyectos con Arduino.'
    }
  ];

  cart: Product[] = [];
  isCartOpen = false;

  constructor(private modalController: ModalController, private alertController: AlertController) {}

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  openCart() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  async proceedToPayment() {
    const total = this.getTotal().toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const alert = await this.alertController.create({
      header: 'Confirmar Pago',
      message: `El total a pagar es ${total}. ¿Deseas proceder?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Pagar',
          handler: () => {
            this.cart = [];
            this.closeCart();
            this.presentPaymentSuccess();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentPaymentSuccess() {
    const alert = await this.alertController.create({
      header: 'Pago Exitoso',
      message: 'Tu pago ha sido procesado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
