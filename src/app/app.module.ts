import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ParadeComponent } from './parade/parade.component';
import { ParadeFormComponent } from './parade-form/parade-form.component';
import { VeloComponent } from './velo/velo.component';
import { VeloFormComponent } from './velo-form/velo-form.component';
import { UpdateParadeFormComponent } from './update-parade-form/update-parade-form.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationComponent } from './formation/formation.component';
import { UpdateVeloComponent } from './update-velo/update-velo.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardContentComponent,
    ParadeComponent,
    ParadeFormComponent,
    VeloComponent,
    VeloFormComponent,
    UpdateParadeFormComponent,
    FormationFormComponent,
    FormationComponent,
    UpdateVeloComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
