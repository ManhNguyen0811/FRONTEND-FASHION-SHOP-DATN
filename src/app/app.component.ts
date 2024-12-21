import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { NavBottomComponent} from './Component/nav-bottom/nav-bottom.component';
import {isPlatformBrowser, NgIf} from '@angular/common';
import {CheckoutPaymentComponent} from './Component/checkout-payment/checkout-payment.component';
import {CheckoutDeliveryComponent} from './Component/checkout-delivery/checkout-delivery.component';
import {CouponComponent} from './Component/coupon/coupon.component';
import {OrderSummaryComponent} from './Component/order-summary/order-summary.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,HomeComponent,ProductComponent, NavBottomComponent,
    CheckoutPaymentComponent,CheckoutDeliveryComponent,CouponComponent,OrderSummaryComponent






  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND-FASHION-SHOP';
}
