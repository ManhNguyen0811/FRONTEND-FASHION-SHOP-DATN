import { Component } from '@angular/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import {   RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [OrderHistoryComponent,RouterOutlet
    ,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
