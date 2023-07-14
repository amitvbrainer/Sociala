import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveStreamComponent } from './live-stream.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LiveStreamComponent }
]

@NgModule({
  declarations: [
    LiveStreamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LiveStreamModule { }
