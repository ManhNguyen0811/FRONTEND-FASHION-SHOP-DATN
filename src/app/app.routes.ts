import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import {ProductDetailComponent} from './Component/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-detail', component: ProductDetailComponent },
];
