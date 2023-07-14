import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBoxComponent } from './email-box.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: EmailBoxComponent }
]

@NgModule({
  declarations: [
    EmailBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmailBoxModule { }
