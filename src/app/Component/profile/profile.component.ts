import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import {   NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [OrderHistoryComponent,RouterOutlet, CommonModule
    ,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
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
