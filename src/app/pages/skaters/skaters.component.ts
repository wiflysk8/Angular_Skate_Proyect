import { SkatersService } from './../../core/services/skaters.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skaters',
  templateUrl: './skaters.component.html',
  styleUrls: ['./skaters.component.scss'],
})
export class SkatersComponent implements OnInit {

  skaters: any;
  searchSkater: any;

  constructor(
    private skatersService: SkatersService,

  ) {}

  ngOnInit(): void {
    this.skatersService.getSkaters().subscribe((res: any) => {
      this.skaters = res;
    });
  }

 /*  onSearch(skater: any) {
    if (this.gestionForm.value.name =='') {
      this.skatersService.getSkaters().subscribe((res: any) => {
        this.skaters = res;
        console.log("hola123", this.skaters);
      });
    } else {
      skater = this.gestionForm.get('name').value;
      this.skatersService.filteredSkater(skater).subscribe((res: any) => {
        this.skaters = res;
      }); */

  }



