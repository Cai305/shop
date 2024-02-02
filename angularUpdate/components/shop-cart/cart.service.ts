// cart.service.ts
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable(); // For components to subscribe

  constructor() {}

  // Add a new item or update the quantity if it already exists
  addItem(item: CartItem) {
 
    const currentItems = this.itemsSubject.value;
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedItems = currentItems.map((cartItem, index) => {
        if (index === itemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }; // Increment quantity
        }
        return cartItem;
      });
      this.itemsSubject.next(updatedItems);
    } else {
      this.itemsSubject.next([...currentItems, { ...item, quantity: 1 }]); // Add new item with quantity 1
    }
  }


  // Remove an item from the cart
  removeItem(id: number) {
    const updatedItems = this.itemsSubject.value.filter(item => item.id !== id);
    this.itemsSubject.next(updatedItems);
  }

  // Clear the cart
  clearCart() {
    this.itemsSubject.next([]);
  }

  // Get the current cart items (useful for one-off needs, though subscribing to items$ is preferred)
  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }
}

