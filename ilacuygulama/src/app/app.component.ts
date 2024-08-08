import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ilacAdi: string = '';
  miktar: number = 0;
  gun: string = 'Pazartesi';
  saat: string = '';

  submitForm() {
    console.log('İlaç Adı:', this.ilacAdi);
    console.log('Alınacak Miktar:', this.miktar);
    console.log('Alınacak Gün:', this.gun);
    console.log('Alınacak Saat:', this.saat);
    // Verileri işlemek için uygun bir işlevi burada çağırabilirsiniz
  }
}
