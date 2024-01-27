import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { RouterLink } from '@angular/router';
import { CartService } from './core/services/cart.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,LandingComponent,RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private cartService: CartService) {}
  title = 'Artseller-app';
  isCartEmpty:boolean = true;
  ngOnInit(): void {
    // Subscribe to the cart observable to reactively update isCartEmpty
    this.cartService.cart$.subscribe((cartItems) => {
      this.isCartEmpty = cartItems.length === 0;
    });
  }

  
}
