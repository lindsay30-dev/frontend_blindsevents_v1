import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private authService = inject(AuthService);
  private http = inject(HttpClient);

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  featuredEvents: any[] = [];
  isLoading = true;

  constructor() {
    this.loadFeaturedEvents();
  }

  loadFeaturedEvents() {
    this.http.get(`${environment.apiUrl}/events/?limit=6`).subscribe({
      next: (response: any) => {
        this.featuredEvents = response.results || [];
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading featured events:', error);
        this.isLoading = false;
      }
    });
  }
}
