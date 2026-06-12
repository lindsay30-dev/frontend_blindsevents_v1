import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking, BookingCreate } from '../models/booking.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/bookings`;

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/`);
  }

  getBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}/`);
  }

  createBooking(data: BookingCreate): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/`, data);
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/cancel/`, {});
  }

  getWallet(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/wallet/`);
  }

  verifyTicket(paymentRef: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify/`, { payment_ref: paymentRef });
  }
}
