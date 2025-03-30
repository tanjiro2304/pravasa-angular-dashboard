import { Injectable } from '@angular/core';
import {Filter} from '../models/Filter';
import {Observable} from 'rxjs';
import {DepotDto} from '../models/DepotDto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StopDto} from '../models/StopDto';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  private baseUrl = "http://localhost:8011/stop";
  constructor(private http: HttpClient) { }

  save(stop: StopDto): Observable<void> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<void>(`${this.baseUrl}/save`, stop, { headers });
  }

  // findAllStops(filter: Filter): Observable<StopDto[]> {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   return this.http.post<StopDto[]>(`${this.baseUrl}/findAllDepots`, filter, { headers });
  // }
}
