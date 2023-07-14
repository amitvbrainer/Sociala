import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularGroupComponent } from './popular-group.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PopularGroupComponent }
]

@NgModule({
  declarations: [
    PopularGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PopularGroupModule { }
