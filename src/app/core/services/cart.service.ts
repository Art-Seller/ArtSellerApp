import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private orders: any[] = [];

  constructor() { }

  addToCart(order:any){
    this.orders.push(order);
  }

  getOrders(){
    return this.orders
  }
}
