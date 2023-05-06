import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent {
  isShown: boolean = true;
  getScreenHeight: number = 0;
  getScreenWidth: number = 0;
  isVisible: boolean = true;

  constructor() {
    this.onWindowResize();
  }
  onHamburgerPress() {
    this.isVisible = !this.isVisible;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    //console.log(this.getScreenWidth, this.getScreenHeight);
    if (this.getScreenWidth <= 640) {
      this.isShown = false;
      this.isVisible = false;
    } else {
      this.isShown = true;
    }
  }
}
