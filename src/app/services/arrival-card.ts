import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArrivalCard {
  name: string;
  id_number: string;
  arrival_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArrivalCardAPI {
  private baseUrl = 'http://arrival-cards-alb-1022548571.ap-southeast-1.elb.amazonaws.com';

  constructor(private http: HttpClient) {}

  create(card: ArrivalCard): Observable<any> {
    return this.http.post(`${this.baseUrl}/arrival-card`, card);
  }

  list(): Observable<ArrivalCard[]> {
    return this.http.get<ArrivalCard[]>(`${this.baseUrl}/arrival-cards`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/arrival-card/${id}`);
  }
}
