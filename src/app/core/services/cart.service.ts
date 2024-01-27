import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cart$: Observable<any[]> = this.cartSubject.asObservable();

  constructor() { }

  addToCart(order: any): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = [...currentCart, order];
    this.cartSubject.next(updatedCart);
  }

  getOrders(): any[] {
    return this.cartSubject.value;
  }
}
