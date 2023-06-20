import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = [
    { path: '/home', title: 'Home', icon: '', class: '' },
    { path: '/badge', title: 'Badges', icon: '', class: '' },
    { path: '/stories', title: 'Explore Stories', icon: '', class: '' },
  ];

  ngOnInit(): void {

  }

}
