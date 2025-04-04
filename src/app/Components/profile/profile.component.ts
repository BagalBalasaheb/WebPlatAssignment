import { Component } from '@angular/core';
import { ApiService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileData: any = null;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getProfile().subscribe({
      next: (data) => {
        this.profileData = data;
      },
      error: () => console.error('Failed to load profile'),
    });

  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
