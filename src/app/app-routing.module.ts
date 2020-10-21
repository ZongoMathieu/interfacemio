import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { VigilesComponent } from './vigiles/vigiles.component';
import { VisiteesComponent } from './visitees/visitees.component';
import { VisiteursComponent } from './visiteurs/visiteurs.component';

const routes: Routes = [
  {path:'services', component:ServicesComponent},
  {path:'visiteurs', component:VisiteursComponent},
  {path:'visitees', component:VisiteesComponent},
  {path:'vigiles', component:VigilesComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'', redirectTo:'/accueil', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
