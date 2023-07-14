import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetwotkComponent } from './social-netwotk.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SocialNetwotkComponent }
]

@NgModule({
  declarations: [
    SocialNetwotkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SocialNetwotkModule { }
