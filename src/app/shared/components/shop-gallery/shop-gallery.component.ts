import { ShopService } from 'src/app/core/services/shop.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-gallery',
  templateUrl: './shop-gallery.component.html',
  styleUrls: ['./shop-gallery.component.scss']
})
export class ShopGalleryComponent implements OnInit {
  @Input() gallery: any;
  constructor(public shopService: ShopService) { }

  ngOnInit(): void {
  }



}
