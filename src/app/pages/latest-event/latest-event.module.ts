import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestEventComponent } from './latest-event.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LatestEventComponent }
]

@NgModule({
  declarations: [
    LatestEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LatestEventModule { }
