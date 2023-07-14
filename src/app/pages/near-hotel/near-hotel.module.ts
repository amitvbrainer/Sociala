import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearHotelComponent } from './near-hotel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NearHotelComponent }
]

@NgModule({
  declarations: [
    NearHotelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NearHotelModule { }
