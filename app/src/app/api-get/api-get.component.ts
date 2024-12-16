import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-get',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for Angular directives
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css'], // Fix plural typo
})
export class ApiGetComponent {
  posts: any[] = [];
  response: any;
  deleteResponse: any;

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }


  submitProduct() {
    const product = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };

    this.http.post('https://fakestoreapi.com/products', product).subscribe({
      next: (data) => {
        console.log('Product added:', data);
        this.response = data;
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
    });
  }

  deleteProduct() {
   

    const productId = 6; // ID of the product to delete
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    this.http.delete(apiUrl).subscribe({
      next: (response) => {
        console.log('Product deleted:', response);
        this.deleteResponse = response;
      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });
  }

}
