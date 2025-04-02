import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../Components/nav/nav.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, RouterOutlet, NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private router: Router) { }
}
