import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skater-detail',
  templateUrl: './skater-detail.component.html',
  styleUrls: ['./skater-detail.component.scss']
})
export class SkaterDetailComponent implements OnInit {
@Input() newSkater: any;
  constructor() { }

  ngOnInit(): void {
  }

}
