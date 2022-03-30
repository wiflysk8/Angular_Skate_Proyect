import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "skaters", loadChildren: () =>
      import('./pages/skaters/skaters.module').then(m => m.SkatersModule)
  },
  {
    path: "shop", loadChildren: () =>
      import('./pages/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: "contact", loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
