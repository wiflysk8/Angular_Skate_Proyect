import { ShopService } from './../../core/services/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  products: any;

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((res: any)=>{
      this.products=res;
    })
  }

}
