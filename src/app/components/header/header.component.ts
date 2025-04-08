import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authService = inject(AuthService);
  loginService = inject(LoginService);
  isLoggedIn = signal(false);

  constructor() {
    this.isLoggedIn.set(this.authService.isLoggedIn());
  }

  onLogout() {
    this.loginService.logout();
  }
}
