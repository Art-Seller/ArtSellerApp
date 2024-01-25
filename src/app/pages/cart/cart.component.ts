import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  orders: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orders = this.cartService.getOrders();
  }

}
