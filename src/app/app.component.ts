import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { NavBottomComponent} from './Component/nav-bottom/nav-bottom.component';
import {CommonModule, isPlatformBrowser, NgIf} from '@angular/common';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { SigninComponent } from './Component/signin/signin.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { OrderHistoryComponent } from './Component/profile/order-history/order-history.component';
import { EditProfileComponent } from './Component/profile/edit-profile/edit-profile.component';
import { EditAddressComponent } from './Component/profile/edit-address/edit-address.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule,
    FooterComponent,HomeComponent,CommonModule,
    ProductComponent, NavBottomComponent,
    CartComponent,LoginComponent, SigninComponent,
    ForgotPasswordComponent, ProfileComponent,
     OrderHistoryComponent, EditProfileComponent,
     EditAddressComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND-FASHION-SHOP';
  isLoading = false;
  
    constructor(private router: Router, private cdr: ChangeDetectorRef) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
          this.cdr.detectChanges();
        } else if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
          }, 200); 
        }
      });
    }
    
}
