import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.css']
})
export class VisiteursComponent implements OnInit {
  public visiteurs;

  constructor(private appSer: AppService) { }

  ngOnInit(): void {
   // setInterval(()=>{this.getVisiteurs();},10000)
    this.getVisiteurs()
    
  }

  private getVisiteurs(){
    this.appSer.getResource("/visiteurs").subscribe(data=>{
      this.visiteurs=data;
      console.log(data);
    }, err=>{
      console.log(err);
    })
  }

}
