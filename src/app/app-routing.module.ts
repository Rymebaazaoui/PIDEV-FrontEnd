import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ParadeComponent} from "./parade/parade.component";
import {UpdateParadeFormComponent} from "./update-parade-form/update-parade-form.component";
import {NavbarAdminComponent} from "./navbar-admin/navbar-admin.component";
import {LoginComponent} from "./login/login.component";
import {HomepageContentComponent} from "./homepage-content/homepage-content.component";
import {FormationComponent} from "./formation/formation.component";
import {DistanceFormComponent} from "./distance-form/distance-form.component";
import {ClientParadeComponent} from "./client-parade/client-parade.component";
import {InscriptionParadeFormComponent} from "./inscription-parade-form/inscription-parade-form.component";
import {VisiteComponent} from "./visite/visite.component";
import { UpdateVisiteFormComponent } from './update-visite-form/update-visite-form.component';



const routes: Routes = [
  {path:'Navbar-admin', component: NavbarAdminComponent},
  {path:'dashboard', component: DashboardContentComponent},
  {path:'parade', component: ParadeComponent},
  {path:'edit-parade/:id', component: UpdateParadeFormComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomepageContentComponent},
  {path:'formation', component: FormationComponent},
  {path:'Distance', component: DistanceFormComponent},
  {path:'listParade', component: ClientParadeComponent},
  {path:'InscriptionParade', component: InscriptionParadeFormComponent},
  {path:'visite', component: VisiteComponent},
  {path:'updateVisite/:id', component: UpdateVisiteFormComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
