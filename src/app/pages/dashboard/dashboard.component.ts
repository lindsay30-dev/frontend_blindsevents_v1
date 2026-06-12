import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { StatsService } from '../../core/services/stats.service';
import { DashboardStats } from '../../core/models/stats.model';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private http = inject(HttpClient);

  currentUser = this.authService.currentUser;
  isOrganizer = this.authService.isOrganizer;
  dashboardStats: any = null;
  isLoading = true;

  constructor() {
    if (this.isOrganizer) {
      this.loadDashboardStats();
    } else {
      this.isLoading = false;
    }
  }

  loadDashboardStats() {
    this.http.get(`${environment.apiUrl}/stats/dashboard/`).subscribe({
      next: (stats: any) => {
        this.dashboardStats = stats;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading dashboard stats:', error);
        this.isLoading = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
