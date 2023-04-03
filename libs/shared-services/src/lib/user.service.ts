import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '@consider/interfaces';
import { HttpClient } from '@angular/common/http';

export type SignInPayload = {
  email: string,
  password: string
}


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000';
  private endpoint = 'user';

  constructor(
    private apiService: ApiService,
    private http: HttpClient

  ) {}

  signIn(payload: SignInPayload): Observable<any> {
    return this.http.post<User>(`${this.baseUrl}/${this.endpoint}/signin`, payload, {observe: 'response', withCredentials: true});
  }

  checkAuth(): Observable<any> {
  return this.http.get(`${this.baseUrl}/${this.endpoint}/check`, { withCredentials: true });
}

  signOut(): Observable<any> {
    return this.apiService.post<User>(`${this.endpoint}/signout`, {});

  }

}


