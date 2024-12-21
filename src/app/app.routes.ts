import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import {CheckoutDeliveryComponent} from './Component/checkout-delivery/checkout-delivery.component';
import {CheckoutPaymentComponent} from './Component/checkout-payment/checkout-payment.component';
import {CouponComponent} from './Component/coupon/coupon.component';
import {OrderSummaryComponent} from './Component/order-summary/order-summary.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'checkout-delivery', component: CheckoutDeliveryComponent },
    { path: 'checkout-payment', component: CheckoutPaymentComponent },
    { path: 'coupon', component: CouponComponent },
  { path: 'order-summary', component: OrderSummaryComponent },

];
