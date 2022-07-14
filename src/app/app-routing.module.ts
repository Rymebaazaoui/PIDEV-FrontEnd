import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ParadeComponent} from "./parade/parade.component";
import { VeloComponent } from './velo/velo.component';


const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'dashboard', component: DashboardContentComponent},
  {path:'parade', component: ParadeComponent},
  {path:'velo', component: VeloComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
