import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { authGuard } from 'app/auth.guard';

const pagesRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),canActivate:[authGuard] },
  { path: 'badge', loadChildren: () => import('../pages/badges/badges.module').then(m => m.BadgesModule) },
  { path: 'stories', loadChildren: () => import('../pages/storie/storie.module').then(m => m.StorieModule) },
  { path: 'defaultgroup', loadChildren: () => import('../pages/popular-group/popular-group.module').then(m => m.PopularGroupModule) },
  { path: 'userpage', loadChildren: () => import('../pages/author-profile/author-profile.module').then(m => m.AuthorProfileModule) },
  { path: 'defaultemailbox', loadChildren: () => import('../pages/email-box/email-box.module').then(m => m.EmailBoxModule) },
  { path: 'defaulthotel', loadChildren: () => import('../pages/near-hotel/near-hotel.module').then(m => m.NearHotelModule) },
  { path: 'defaultevent', loadChildren: () => import('../pages/latest-event/latest-event.module').then(m => m.LatestEventModule) },
  { path: 'defaultlive', loadChildren: () => import('../pages/live-stream/live-stream.module').then(m => m.LiveStreamModule) },
  { path: 'defaultsettings', loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'defaultanalytics', loadChildren: () => import('../pages/analytics/analytics.module').then(m => m.AnalyticsModule) },
  { path: 'defaultmessage', loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatModule) },
  { path: 'accountinformation', loadChildren: () => import('../pages/account-details/account-details.module').then(m => m.AccountDetailsModule) },
  { path: 'contactinformation', loadChildren: () => import('../pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule) },
  { path: 'socialaccount', loadChildren: () => import('../pages/social-netwotk/social-netwotk.module').then(m => m.SocialNetwotkModule) },
  { path: 'payment', loadChildren: () => import('../pages/card-details/card-details.module').then(m => m.CardDetailsModule) },
  { path: 'password', loadChildren: () => import('../pages/change-password/change-password.module').then(m => m.ChangePasswordModule) },
  { path: 'defaultnotification', loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'defaultnotification', loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'helpbox', loadChildren: () => import('../pages/helpbox/helpbox.module').then(m => m.HelpboxModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes),
    FormsModule,
    SharedModule
  ],
})
export class AdminModule { }
