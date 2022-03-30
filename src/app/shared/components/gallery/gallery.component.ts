import { Component, Input, OnInit } from '@angular/core';
import { SkatersService } from 'src/app/core/services/skaters.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input() gallery: any;

filterSkater='';


  constructor(public skatersService:SkatersService) { }


  ngOnInit(): void {
  }



}
