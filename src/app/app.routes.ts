import { Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home/home.component';
import { ProductComponent } from './Component/Product/product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },

];
