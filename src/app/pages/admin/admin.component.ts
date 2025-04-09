import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  loginService = inject(LoginService);
  authService = inject(LoginService);
  router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.loginService.login(this.loginForm.value.username!, this.loginForm.value.password!);

    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/',  { skipLocationChange: true });
    }
  }
}
