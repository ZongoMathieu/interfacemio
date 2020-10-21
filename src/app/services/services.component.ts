import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services;
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

}
