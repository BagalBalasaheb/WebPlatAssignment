import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../Services/auth.service';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data.products;
        this.filteredProducts = this.products;
      },
      error: () => console.error('Failed to load products'),
    });
  }

  filterProducts(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }
}
