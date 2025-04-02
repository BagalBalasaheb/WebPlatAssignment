import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects.replace('/dashboard/', '');
      }
    });
  }

  navigateTo(route: string) {
    this.router.navigate([`/dashboard/${route}`]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
