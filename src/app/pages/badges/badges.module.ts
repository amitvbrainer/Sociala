import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BadgesComponent }
]

@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BadgesModule { }
