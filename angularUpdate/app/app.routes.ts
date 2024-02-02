import { Routes } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { LoginComponent } from '../components/Authentication/login/login.component';
import { RegisterComponent } from '../components/Authentication/register/register.component';
import { ShopCartComponent } from '../components/shop-cart/shop-cart.component';

export const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'cart', component:ShopCartComponent},
];
