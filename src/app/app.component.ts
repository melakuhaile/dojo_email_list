import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  imageArray = [];
  //
  fillImageArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.imageArray.push('Blue');
      } else if (randNum === 2) {
        this.imageArray.push('Red');
      } else if (randNum === 3) {
        this.imageArray.push('Green');
      } else if (randNum === 4) {
        this.imageArray.push('DarkBlue ');
      } else if (randNum === 5) {
        this.imageArray.push('Yellow');
      } else if (randNum === 6) {
        this.imageArray.push('Violet');
      } else if (randNum === 7) {
        this.imageArray.push('AfricanViolet');
      }
    }
  }
  ngOnInit() {
    this.fillImageArray();
  }
}
