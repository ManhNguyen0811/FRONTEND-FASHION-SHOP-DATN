import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
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
