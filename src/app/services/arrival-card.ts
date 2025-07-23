import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ArrivalCard {
  name: string;
  id: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArrivalCardService {
  private baseUrl = 'http://arrival-cards-alb-1022548571.ap-southeast-1.elb.amazonaws.com';

  constructor(private http: HttpClient) {}

  createCard(card: ArrivalCard): Observable<any> {
    return this.http.post(`${this.baseUrl}/arrival-card`, card);
  }

  getAllCards(): Observable<ArrivalCard[]> {
    return this.http.get<ArrivalCard[]>(`${this.baseUrl}/arrival-card`);
  }

  deleteCard(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/arrival-card/${id}`);
  }
}

