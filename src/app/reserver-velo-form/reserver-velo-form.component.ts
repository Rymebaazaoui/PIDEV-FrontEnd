import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudReservationService } from '../service/crud-reservation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Reservation } from '../models/reservation';


@Component({
  selector: 'app-reserver-velo-form',
  templateUrl: './reserver-velo-form.component.html',
  styleUrls: ['./reserver-velo-form.component.css']
})
export class ReserverVeloFormComponent implements OnInit {

  ReserverVeloForm: FormGroup;
  velos:any=[];
reservations:any=[];
  selectedType! : any;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudReservationService: CrudReservationService) {

      this.ReserverVeloForm = this.formBuilder.group({
        Nom: [''],
        Prenom : [''],
        Mail : [''],
        DateDeb: [''],
        DateFin : [''],
        Velo : ['']
      })

     }

     ngOnInit(): void {
      this.crudReservationService.GetVelo().subscribe(res => {
        console.log(res)
        this.velos =res;
      }); 
     
    }
    Alert(){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'votre réservation a été acceptée, veuillez vérifier votre courrier',
        showConfirmButton: false,
        timer: 1500
      })  }
  onSubmit(): any {
    this.crudReservationService.AddReservation(this.ReserverVeloForm.value, this.selectedType)
    .subscribe(() => {
        console.log('Data added successfully!')

        this.ngZone.run(() => this.router.navigateByUrl('/listVelo'))
      }, (err) => {
        console.log(err);
    });
    this.Alert()

  }

}
