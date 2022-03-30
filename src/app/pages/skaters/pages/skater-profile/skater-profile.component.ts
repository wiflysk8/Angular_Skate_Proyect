import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkatersService } from 'src/app/core/services/skaters.service';

@Component({
  selector: 'app-skater-profile',
  templateUrl: './skater-profile.component.html',
  styleUrls: ['./skater-profile.component.scss'],
})
export class SkaterProfileComponent implements OnInit {
  skater: any;
  skaters: any;

  constructor(
    private route: ActivatedRoute,
    private skatersService: SkatersService,
    private router:Router
  ) {}


  ngOnInit(): void {
    this.skatersService.getSkaters().subscribe((res: any) => {
       this.skaters = res;
      this.route.paramMap.subscribe((params) => {
        const idSkater = Number(params.get('idSkater'));
        for (this.skater of this.skaters) {
          if( this.skater.id == idSkater) {
            return this.skater;
          }
        }
      });
    });
  }

  onDelete(id:any){
    window.confirm("Are you sure you want to delete this element?");
    if (confirm("Done!")) {
      this.skatersService.deleteSkater(id).subscribe(()=>{
        this.router.navigate(['/skaters'])});

      //window.history.back();
    }else{
      //window.alert("Delete aborted");
      this.router.navigate(['/skaters']);
    }
  }

  onUpdate (item: any){
    this.skatersService.updateInfo(item);
  }
}
