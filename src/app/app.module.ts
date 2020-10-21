import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ServicesComponent } from './services/services.component';
import { VisiteursComponent } from './visiteurs/visiteurs.component';
import { VigilesComponent } from './vigiles/vigiles.component';
import { VisiteesComponent } from './visitees/visitees.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    VisiteursComponent,
    VigilesComponent,
    VisiteesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
