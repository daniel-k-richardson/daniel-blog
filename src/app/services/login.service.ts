import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);
  isLoggedIn = inject(AuthService);
  constructor() { }

  login(username: string, password: string) {
    this.http.post('http://localhost:5115/api/users/token', {username, password})
      .subscribe((response:any) => {
        const token :string = response.token;
        localStorage.setItem("token", token);
        this.isLoggedIn.isLoggedIn.set(true);
      });
  }

  logout() {
    localStorage.removeItem("token");
    this.isLoggedIn.isLoggedIn.set(false);
  }
}
