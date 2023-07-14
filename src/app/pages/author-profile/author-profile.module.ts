import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorProfileComponent } from './author-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AuthorProfileComponent }
]


@NgModule({
  declarations: [
    AuthorProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthorProfileModule { }
