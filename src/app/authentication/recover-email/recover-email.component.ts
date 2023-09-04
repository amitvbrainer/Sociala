import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/service/notification.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-recover-email',
  templateUrl: './recover-email.component.html',
  styleUrls: ['./recover-email.component.scss']
})
export class RecoverEmailComponent {
  recoverEmailForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
    private notifyService : NotificationService) {
    this.recoverEmailForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
  recoverEmail() {
    if (this.recoverEmailForm.valid) {
      this.userService.recoverEmail(this.recoverEmailForm.controls['email'].value).subscribe((resp:any) => {
        if (resp) {
          this.notifyService.showSuccess("Password has been shared via email", "sucess");
          this.router.navigate(['login']);
        }
      })
    }
  }
}
