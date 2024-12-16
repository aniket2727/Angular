import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink], // Import RouterOutlet for routing
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MyApp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/user-name" routerLinkActive="active">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin" routerLinkActive="active">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/binding" routerLinkActive="active">Data binding</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Route Placeholder -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
