import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,NgClass],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  menuState:boolean = false;
  toggleMenu(){
    this.menuState = !this.menuState;
  }

  applogo="https://www.fnordware.com/superpng/pnggrad16rgb.png"
}
