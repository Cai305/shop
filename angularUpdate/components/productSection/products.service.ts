import { ProductSectionComponent } from './productSection.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ProductSection {
  // Define the structure of your data
  id: number;
  title: string;
  name: string;
  price: number;
  description?: string;  // Optional property
  category?: string;     // Optional property
  image?: any;     // Optional property
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private womenProductsSource = new BehaviorSubject<ProductSection[]>([]);
  private manProductsSource = new BehaviorSubject<ProductSection[]>([]);

  women_Category$ = this.womenProductsSource.asObservable();
  man_Category$ = this.manProductsSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get<ProductSection[]>("https://strapishop.onrender.com/api/tproducts?populate=*").pipe(
      tap((data:any) => {

        console.log(data)
        // Filter the data into two categories
        const womenProducts = data.data.filter((product:any) => product.attributes.category === 'woman')
        .map((product:any) => ({
          ...product.attributes,
          image: product.attributes.image.data.attributes.url
        }));
        const manProducts = data.data.filter((product:any) => product.attributes.category === 'men')
        .map((product:any) => ({
          ...product.attributes,
          image: product.attributes.image.data.attributes.url
        }));

        // Update the BehaviorSubjects
        console.log(manProducts)
        this.womenProductsSource.next(womenProducts);
        this.manProductsSource.next(manProducts);
      })
    ).subscribe(); // Handle errors as necessary
  }
}



