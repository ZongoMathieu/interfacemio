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

  constructor(){}
  ngOnInit(): void{
    
  }

  
}
