import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '@consider/interfaces';

export type SignInPayload = {
  email: string,
  password: string
}


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = 'user';

  constructor(private apiService: ApiService) {}

  signIn(payload: SignInPayload): Observable<User> {
    return this.apiService.post<User>(`${this.endpoint}/signin`, payload);
  }

  signOut(): Observable<any> {
    return this.apiService.post<User>(`${this.endpoint}/signout`, {});

  }

}


