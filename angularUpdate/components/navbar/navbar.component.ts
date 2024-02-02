import { CartService } from './../shop-cart/cart.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Authentication/login/login.component';
import { RegisterComponent } from '../Authentication/register/register.component';
import { AuthenticationService } from '../Authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule,RouterModule,LoginComponent,RegisterComponent],
  providers: [AuthenticationService,CartService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
islogin=false;

constructor(private authenticationService:AuthenticationService ,private cartService:CartService){}



ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.cartService.getItems()
}
}

