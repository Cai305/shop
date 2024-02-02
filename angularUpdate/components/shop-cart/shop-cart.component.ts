
// cart.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { CartItem } from './cart-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [CommonModule],
  providers:[CartService],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.subscription.add(
      this.cartService.items$.subscribe((items:any) => {
        this.cartItems = items;
      })
    );
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
