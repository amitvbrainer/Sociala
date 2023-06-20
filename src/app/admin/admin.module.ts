import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

const pagesRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule) },
  { path: 'badge', loadChildren: () => import('../pages/badges/badges.module').then(m => m.BadgesModule) },
  { path: 'stories', loadChildren: () => import('../pages/storie/storie.module').then(m => m.StorieModule) },
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
