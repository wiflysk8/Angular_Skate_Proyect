import { ShopComponent } from './shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductProfileComponent } from './pages/product-profile/product-profile.component';

const routes: Routes = [
  {path: "", component:ShopComponent},
  {path: ":idProduct", component:ProductProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
