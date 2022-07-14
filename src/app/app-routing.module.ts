import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ParadeComponent} from "./parade/parade.component";
import {UpdateParadeFormComponent} from "./update-parade-form/update-parade-form.component";
import {FormationComponent} from "./formation/formation.component";



const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'dashboard', component: DashboardContentComponent},
  {path:'parade', component: ParadeComponent},
  {path:'edit-parade/:id', component: UpdateParadeFormComponent},
  {path:'formation', component: FormationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
