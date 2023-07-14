import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidebarComponent implements OnInit {
 @Input() sideClass: boolean

  menuItemsFeed = [
    { path: '/home', title: 'NewsFeed', icon: 'fa fa-newspaper-o', class: '' },
    { path: '/badge', title: 'Badges', icon: 'fa fa-id-badge', class: '' },
    { path: '/stories', title: 'Explore Stories', icon: 'fa fa-globe', class: '' },
    { path: '/defaultgroup', title: 'Popular Groups', icon: 'fa fa-bolt', class: '' },
    { path: '/userpage', title: 'Author Profile', icon: 'fa fa-user-o', class: '' },
   
  ];

  menuItemsMorePage = [
    { path: '/defaultemailbox', title: 'Email Box', icon: 'fa fa-envelope-o text-primary fs-4', class: '' },
    { path: '/defaulthotel', title: 'Near Hotel', icon: 'fa fa-hotel text-primary fs-4', class: '' },
    { path: '/defaultevent', title: 'Latest Event', icon: 'fa fa-map-marker text-primary fs-4', class: '' },
    { path: '/defaultlive', title: 'Live Stream', icon: 'fa fa-youtube-play text-primary fs-4', class: '' },
  ]

  menuItemsAccount = [
    { path: '/defaultsettings', title: 'Settings', icon: 'fa fa-cog text-black-50 fs-4', class: '' },
    { path: '/defaultanalytics', title: 'Analytics', icon: 'fa fa-pie-chart text-black-50 fs-4', class: '' },
    { path: '/defaultmessage', title: 'Chat', icon: 'fa fa-comment-o text-black-50 fs-4', class: '' },
  ];

  ngOnInit(): void {
    
  }

  
}
