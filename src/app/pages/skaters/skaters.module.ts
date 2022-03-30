import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkatersRoutingModule } from './skaters-routing.module';
import { SkatersComponent } from './skaters.component';
import { SkaterProfileComponent } from './pages/skater-profile/skater-profile.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SkatersComponent,
    SkaterProfileComponent
  ],
  imports: [
    CommonModule,
    SkatersRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SkatersModule { }
