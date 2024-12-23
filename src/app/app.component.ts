import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { NavBottomComponent} from './Component/nav-bottom/nav-bottom.component';
import {isPlatformBrowser, NgIf} from '@angular/common';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { SigninComponent } from './Component/signin/signin.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { OrderHistoryComponent } from './Component/profile/order-history/order-history.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, 
    FooterComponent,HomeComponent,
    ProductComponent, NavBottomComponent,
    CartComponent,LoginComponent, SigninComponent,
    ForgotPasswordComponent, ProfileComponent, OrderHistoryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND-FASHION-SHOP';
}
