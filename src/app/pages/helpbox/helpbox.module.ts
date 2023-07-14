import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpboxComponent } from './helpbox.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HelpboxComponent }
]

@NgModule({
  declarations: [
    HelpboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HelpboxModule { }
