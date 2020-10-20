import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public host:string="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getResource(url){
return this.http.get(this.host+url);
  }
}
