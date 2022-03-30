import { SkatersComponent } from './skaters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkaterProfileComponent } from './pages/skater-profile/skater-profile.component';

const routes: Routes = [
  {path: "", component:SkatersComponent},
  {path: ":idSkater", component:SkaterProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkatersRoutingModule { }
