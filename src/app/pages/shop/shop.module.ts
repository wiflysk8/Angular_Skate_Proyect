import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductProfileComponent } from './pages/product-profile/product-profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShopComponent,
    ProductProfileComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RouterModule,

  ]
})
export class ShopModule { }
