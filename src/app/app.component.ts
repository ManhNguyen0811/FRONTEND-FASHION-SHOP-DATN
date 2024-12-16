import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/Header/header/header.component";
import { FooterComponent } from "./Component/Footer/footer/footer.component";
import { HomeComponent } from './Component/Home/home/home.component';
import { ProductComponent } from './Component/Product/product/product.component';
import {isPlatformBrowser, NgIf} from '@angular/common';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,HomeComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND-FASHION-SHOP';
}
