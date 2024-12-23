import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {NgClass} from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHome: boolean = false;

  constructor(private router: Router) {
    // Kiểm tra nếu đường dẫn hiện tại là "/"
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/'  ;
    });
  }
}
