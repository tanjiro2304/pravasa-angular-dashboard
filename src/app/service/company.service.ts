import { Injectable } from '@angular/core';
import {CompanyDto} from '../models/CompanyDto';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = "http://localhost:8011/company";

  constructor(private http: HttpClient) {}

  // Save Company
  saveCompany(company: CompanyDto): Observable<void> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<void>(`${this.baseUrl}/save`, company, { headers });
  }

  // Get All Companies
  findAllCompanies(): Observable<CompanyDto[]> {
    return this.http.get<CompanyDto[]>(`${this.baseUrl}/findAll`);
  }
}
