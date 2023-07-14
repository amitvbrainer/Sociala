import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

  constructor(private route: Router) {}

  ngOnInit(): void {
    
  }

  goToAccountDetails() {
    this.route.navigate(['/accountinformation']);
  }

  goToContactDetails() {
    this.route.navigate(['/contactinformation']);
  }

  goToSocialDetails() {
    this.route.navigate(['/socialaccount']);
  }

  goToCardDetails() {
    this.route.navigate(['/payment']);
  }

  goToPasswordDetails() {
    this.route.navigate(['/password']);
  }

  goToNotification() {
    this.route.navigate(['/defaultnotification']);
  }

  goToHelpBox() {
    this.route.navigate(['/helpbox']);
  }

  logOut() {
    this.route.navigate(['/login']);
  }
  
}
