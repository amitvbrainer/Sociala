import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorieComponent } from './storie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StorieComponent }
]

@NgModule({
  declarations: [
    StorieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StorieModule { }
