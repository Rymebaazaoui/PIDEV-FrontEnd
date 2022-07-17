import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ParadeComponent} from "./parade/parade.component";
import { VeloComponent } from './velo/velo.component';
import {UpdateParadeFormComponent} from "./update-parade-form/update-parade-form.component";
import {FormationComponent} from "./formation/formation.component";
import { UpdateVeloComponent } from './update-velo/update-velo.component';
import { ReservationComponent } from './reservation/reservation.component';



const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'dashboard', component: DashboardContentComponent},
  {path:'parade', component: ParadeComponent},
  {path:'velo', component: VeloComponent},
  {path:'edit-velo/:id', component: UpdateVeloComponent},
  {path:'reservation', component: ReservationComponent},

  {path:'edit-parade/:id', component: UpdateParadeFormComponent},
  {path:'formation', component: FormationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
