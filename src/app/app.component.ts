import { Component, OnInit } from '@angular/core';
import { AppService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interfacemio';
  public visiteurs;

  constructor(private appSer: AppService){}
  ngOnInit(): void{
    this.getVisiteurs();
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
