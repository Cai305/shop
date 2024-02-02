import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartItem } from '../shop-cart/cart-item.model';
import { CartService } from '../shop-cart/cart.service';

@Component({
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  providers:[ProductsService],
  selector: 'app-productSection',
  templateUrl: './productSection.component.html',
  styleUrls: ['./productSection.component.css']
})

export class ProductSectionComponent implements OnInit {
  private subscription = new Subscription();
  constructor(protected dataService:ProductsService ,private cartService:CartService){}
  ngOnInit() {
    this.dataService.fetchData();
     // You can also subscribe to womenProducts$ and manProducts$ if needed, to react to data changes
  }

  // Assume this is in your product component

  addItemToCart(product: any) {
console.log(product)

  const cartItem: CartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image:product.image,
    quantity: 1, // Or some selected quantity
  };

  this.cartService.addItem(cartItem);
}


  ngOnDestroy() {
    // Ensure subscriptions are cleaned up to prevent memory leaks
    this.subscription.unsubscribe();
  }


}

