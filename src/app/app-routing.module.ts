import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ParadeComponent} from "./parade/parade.component";
import { VeloComponent } from './velo/velo.component';
import {UpdateParadeFormComponent} from "./update-parade-form/update-parade-form.component";
import {NavbarAdminComponent} from "./navbar-admin/navbar-admin.component";
import {LoginComponent} from "./login/login.component";
import {HomepageContentComponent} from "./homepage-content/homepage-content.component";
import {FormationComponent} from "./formation/formation.component";
import { UpdateVeloComponent } from './update-velo/update-velo.component';
import { ReservationComponent } from './reservation/reservation.component';
import {DistanceFormComponent} from "./distance-form/distance-form.component";
import {ClientParadeComponent} from "./client-parade/client-parade.component";
import {InscriptionParadeFormComponent} from "./inscription-parade-form/inscription-parade-form.component";
import {VisiteComponent} from "./visite/visite.component";
import { UpdateVisiteFormComponent } from './update-visite-form/update-visite-form.component';
import {UserVisiteComponent} from "./user-visite/user-visite.component";
import {UpdateFormationFormComponent} from './update-formation-form/update-formation-form.component';
import { InscriptionFormationFormComponent } from './inscription-formation-form/inscription-formation-form.component';
import { ClientFormationComponent } from './client-formation/client-formation.component';
import {InscriptionAssociationFormComponent} from "./inscription-association-form/inscription-association-form.component";
import {ClientAssociationComponent} from "./client-association/client-association.component";
import {AssociationComponent} from "./association/association.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {RegistreComponent} from "./registre/registre.component";
import { ClientVeloComponent } from './client-velo/client-velo.component';
import { ReserverVeloFormComponent } from './reserver-velo-form/reserver-velo-form.component';



const routes: Routes = [
  {path:'Navbar-admin', component: NavbarAdminComponent},
  {path:'dashboard', component: DashboardContentComponent},
  {path:'parade', component: ParadeComponent},
  {path:'velo', component: VeloComponent},
  {path:'edit-velo/:id', component: UpdateVeloComponent},
  {path:'reservation', component: ReservationComponent},
  {path:'listVelo', component: ClientVeloComponent},
  {path:'ReserverVelo', component: ReserverVeloFormComponent},
  {path:'edit-parade/:id', component: UpdateParadeFormComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomepageContentComponent},
  {path:'formation', component: FormationComponent},
  {path:'Distance', component: DistanceFormComponent},
  {path:'association', component: AssociationComponent},
  {path:'listParade', component: ClientParadeComponent},
  {path:'InscriptionParade', component: InscriptionParadeFormComponent},
  {path:'visite', component: VisiteComponent},
  {path:'updateVisite/:id', component: UpdateVisiteFormComponent},
  {path:'visite', component: VisiteComponent},
  {path:'searchvisite', component: UserVisiteComponent},
  {path:'listFormations', component: ClientFormationComponent},
  {path:'listAssociation', component: ClientAssociationComponent},
  {path:'InscriptionParade', component: InscriptionParadeFormComponent},
  {path:'InscriptionFormation', component: InscriptionFormationFormComponent},
  {path:'InscriptionAssociation', component: InscriptionAssociationFormComponent},
  {path:'edit-formation/:id', component: UpdateFormationFormComponent},
  {path:'listUser', component: ListUserComponent},
  {path:'registre', component: RegistreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
