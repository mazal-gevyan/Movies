import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

const JWT_TOKEN = 'JwtToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  fakeUsername: string = "username";
  fakePassword: string = "password";

  constructor() {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(
      this.jwtToken !== null
    );
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
   }

  isUserAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }

  setJwtToken(token: string) {
    sessionStorage.setItem(JWT_TOKEN, token);
    this.isAuthenticatedSubject.next(true);
  }

  get jwtToken(): string {
    return sessionStorage.getItem(JWT_TOKEN) || null;
  }
  
  logout(): void {
    localStorage.removeItem(JWT_TOKEN);
  }

  isUserLoggedIn(): boolean {
    if (this.jwtToken != null) {
      return true;
    }
    return false;
  }


}
