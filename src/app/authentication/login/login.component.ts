import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/service/notification.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
    private notifyService : NotificationService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginUser() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value).subscribe((resp: any) => {
        if (resp) {
          this.notifyService.showSuccess("User login is done", "sucess");
          localStorage.setItem('email', resp.email)
          this.router.navigate(['home']);
        }
      })
     }
  }
}
