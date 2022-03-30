import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SkatersService } from 'src/app/core/services/skaters.service';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  gestionForm!: any;
  public submitted: boolean = false;
  public newSkater: any;
  public skaterId = this.skaterService.data._id;

  constructor(
    private formBuilder: FormBuilder,
    private skaterService: SkatersService,
    private shopService: ShopService,
    private router: Router
  ) {
    this.gestionForm = this.formBuilder.group({
      name: [this.skaterService.data.name],
      image: [this.skaterService.data.image],
      age: [this.skaterService.data.age],
      hometown: [this.skaterService.data.hometown],
      category: [this.skaterService.data.category],
      id: [this.skaterService.data.id],
    });
  }


  ngOnInit(): void {
    this.gestionForm.valueChanges.subscribe((changes: any) => {
      this.newSkater = changes;
    });
  }

  isShopSelected: boolean = false;
  selectInput(event: any) {
    let selected = event.target.value;
    if (selected == 'shop') {
      this.isShopSelected = true;
    } else {
      this.isShopSelected = false;
    }
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.gestionForm.valid) {
      this.newSkater = {
        name: this.gestionForm.get('name').value,
        age: this.gestionForm.get('age').value,
        image: this.gestionForm.get('image').value,
        hometown: this.gestionForm.get('hometown').value,
        id: this.gestionForm.get('id').value,
        category: this.gestionForm.get('category').value,
      };
    }
    if (this.skaterService.data._id === undefined) {
      if (this.newSkater.category == 'skaters') {
        this.skaterService.postSkater(this.newSkater).subscribe();
        this.gestionForm.reset();
        alert('Skater added to Database!');
        this.submitted = false;
      } else {
        this.shopService.postShop(this.newSkater).subscribe();
        this.gestionForm.reset();
        alert('Product added to Database!');
        this.submitted = false;
      }
    } else {
      console.log(this.newSkater);
      this.skaterService.putSkater(this.newSkater, this.skaterId).subscribe();
      alert('Updated complete!');
      window.location.reload();
    }
  }
}
