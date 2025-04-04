import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  activeLink: string = '';

  constructor(private router: Router) { }

  // navigateTo(route: string) {
  //   this.router.navigate([`/dashboard/${route}`]);
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
