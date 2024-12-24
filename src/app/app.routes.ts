import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { SigninComponent } from './Component/signin/signin.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { OrderHistoryComponent } from './Component/profile/order-history/order-history.component';
import { OrderDetailComponent } from './Component/profile/order-detail/order-detail.component';
import { ReviewsComponent} from './Component/reviews/reviews.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { path: 'order_history', component: OrderHistoryComponent},
            { path: 'order_history/order_detail', component: OrderDetailComponent },
        ]
    },

];
