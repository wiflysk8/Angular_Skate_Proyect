import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.scss'],
})
export class ProductProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private router:Router
  ) {}

  products: any;
  item: any;
  txt: any;

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.route.paramMap.subscribe((params) => {
        const idProduct = Number(params.get('idProduct'));
        console.log(idProduct);
         for (this.item of this.products) {
          if (this.item.id == idProduct) {
            console.log(this.item);
            return this.item;
          }
        }
      });

    });
  }

  onDelete(id:any){
    window.confirm("Are you sure you want to delete this element?");
    if (confirm("Delete completed")) {
      this.shopService.deleteShop(id).subscribe();
      window.history.back();
      //this.router.navigate(['/shop']);
    }
  }
}
