import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDetails} from '../models/UserDetails';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8011";
  constructor(private http: HttpClient) { }

  login(user: UserDetails): Observable<UserDetails> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<UserDetails>(`${this.baseUrl}/login`, user, { headers });
  }
}
