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
  public data;
  dataExcel: any = [
    {
       
        "CATEGORYID": 1,
        "CATEGORYNAME": "BOOKS",
        "DESCRIPTION": "It contains all types of books",
        "IMAGE": "Books",
        "STATUS": "TRUE"
    },
    {
       
        "CATEGORYID": 2,
        "CATEGORYNAME": "EBOOKS",
        "DESCRIPTION": "It contains all types of ebooks",
        "IMAGE": "Ebooks",
        "STATUS": "TRUE"
    },
    {
     
        "CATEGORYID": 3,
        "CATEGORYNAME": "Bookss",
        "DESCRIPTION": "DESCRIPTION",
        "IMAGE": "IMAGE",
        "STATUS": "TRUE"
    }
];

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

  onSave(data){
    console.log(data);
    this.appServ.getResource("/saveServices/");
  }

  //Funtion to export excel file
  exportAsXLSX():void {
    this.appServ.getResource("/services/")
    .subscribe(data=>{
      this.data=data;
      console.log(data);
      this.appServ.exportAsExcelFile(this.data, 'myExcelFile');
    },err=>{
      console.log(err);
    })
   
 }

}
