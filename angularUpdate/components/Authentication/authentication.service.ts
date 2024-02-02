import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  // Adjust according to your user object structure
  id?: number;
  username?: string;
  token?: string; // Assume JWT or similar token
  jwt?:string;

  email?: string,
  identifier?: string,
  password: string,

}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    // Initialize with null or retrieve user from local storage if needed
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>('https://strapishop.onrender.com/api/auth/local', { username, password }).pipe(
      map(user => {
        // Store user details and JWT token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout(): void {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(user: any): Observable<User> {
    // Adjust the user parameter according to your registration form structure
    return this.http.post<User>('https://strapishop.onrender.com/api/auth/local/register', user).pipe(
      map(user => {
        // Optionally set user as current user and update BehaviorSubject
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
}
