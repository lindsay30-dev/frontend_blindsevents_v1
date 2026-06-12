import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats, EventDetailStats } from '../models/stats.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StatsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/stats/dashboard/`);
  }

  getEventStats(eventId: number): Observable<EventDetailStats> {
    return this.http.get<EventDetailStats>(`${this.apiUrl}/stats/events/${eventId}/`);
  }
}
