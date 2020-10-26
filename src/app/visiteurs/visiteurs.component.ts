import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.css']
})
export class VisiteursComponent implements OnInit {
  public visiteurs;
  fileName= '';
  todayDate : Date = new Date();

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

  exportexcel(): void 
    {
      let annee =this.todayDate.getFullYear();
      console.log(annee);
      this.fileName="FGD_CBI_31-12"+annee+"_S_DEF_1_EXL.EXL.xlsx";
       /* table id is passed over here */  
     
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
       const ws2: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, '31-12-'+(annee-1));
       XLSX.utils.book_append_sheet(wb, ws2, '31-12-AVEC'+(annee-1));

       console.log(this.todayDate);
       /* save to file */
       XLSX.writeFile(wb, this.fileName);
      
       
    }

}
