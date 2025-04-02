import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../Services/auth.service';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data.users;
        this.filteredUsers = this.users;
      },
      error: () => console.error('Failed to load users'),
    });
  }

  filterUsers(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.firstName.toLowerCase().includes(searchTerm)
    );
  }

}
