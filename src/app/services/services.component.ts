import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services;
  public visitees;
  public serviceSelectionned={id:-1};
  public message;
  constructor(private appServ:AppService) { }

  ngOnInit(): void {
    this.getServices()
  }

  getServices(){
    this.appServ.getResource("/services")
    .subscribe(data=>{
      this.services=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  }

  onGetEmployes(s){
    this.message=1;
    console.log(this.message)
    this.serviceSelectionned=s;
    console.log(this.serviceSelectionned);
    this.appServ.getResource("/services/"+s.id+"/visitees")
    .subscribe(data=>{
      this.visitees=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  }

}
