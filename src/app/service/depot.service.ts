import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompanyDto} from '../models/CompanyDto';
import {Observable} from 'rxjs';
import {DepotDto} from '../models/DepotDto';
import {Filter} from '../models/Filter';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8011/depot";

  saveDepot(depot: DepotDto): Observable<void> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<void>(`${this.baseUrl}/save`, depot, { headers });
  }

  // Get All Companies
  findAllDepots(filter: Filter): Observable<DepotDto[]> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<DepotDto[]>(`${this.baseUrl}/findAllDepots`, filter, { headers });
  }


}
