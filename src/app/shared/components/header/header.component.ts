import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  applogo="https://www.fnordware.com/superpng/pnggrad16rgb.png"
}
