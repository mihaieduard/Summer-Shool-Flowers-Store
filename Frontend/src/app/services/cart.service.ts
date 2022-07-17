import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Flower } from '../shared/models/Flowers';
import { CartItem } from '../shared/models/CartItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(flower: Flower): void {
   let cartItem = this.cart.items.find(item => item.flower.id === flower.id);
    console.log('text2');
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(flower));
    this.setCartToLocalStorage();
  }

  removeFromCart(flowerId: string): void {
   this.cart.items = this.cart.items
      .filter(item => item.flower.id != flowerId);

    this.setCartToLocalStorage();
  }

  changeQuantity(flowerId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.flower.id === flowerId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.flower.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
