import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkaterDetailComponent } from './components/skater-detail/skater-detail.component';
import { RouterModule } from '@angular/router';
import { ShopGalleryComponent } from './components/shop-gallery/shop-gallery.component';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    GalleryComponent,
    SkaterDetailComponent,
    ShopGalleryComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [GalleryComponent, SkaterDetailComponent,ShopGalleryComponent, FilterPipe]
})
export class SharedModule { }
