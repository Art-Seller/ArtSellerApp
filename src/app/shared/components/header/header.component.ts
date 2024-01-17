import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,NgClass,RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  menuState:boolean = false;
  toggleMenu(){
    this.menuState = !this.menuState;
  }

  applogo="https://ucarecdn.com/81af85cb-a090-41ec-b4f0-b7d2dbd4084e/pnggrad16rgb.png"
}
