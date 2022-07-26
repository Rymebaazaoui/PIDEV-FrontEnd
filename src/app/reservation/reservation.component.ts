import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudReservationService } from './../service/crud-reservation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations:any=[];
  showForm:boolean;

  constructor(private crudReservationService: CrudReservationService,
    private router: Router,
    private ngZone: NgZone,
    
    ) { }

    dataBeforeParse : any;
  dataAfterParse : any;
    ngOnInit(): void {
      this.showForm=false;
      this.crudReservationService.GetReservation().subscribe(res => {
        console.log(res)
        this.reservations =res;
        
      });    
    }

    show(){
      this.showForm=true;
    }
    model : any={};

  searchdata() {


    this.crudReservationService.SearchBetweenDates(this.model).subscribe((res: any) => {
      this.model.DateDeb= new Date(res.DateDeb);
      this.model.DateFin= new Date(res.DateFin);
      this.reservations.DateDeb = this.model.DateDeb;
      this.reservations.DateFin = this.model.DateFin;
      this.reservations=res;
      //alert(JSON.stringify(res));
    })
  }

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudReservationService.deleteReservation(id).subscribe((res) => {
          this.reservations.splice(i, 1);
  
        })
        this.Alert(); 
      }
    }
  
    Alert(){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'reservation supprimée avec succès',
        showConfirmButton: false,
        timer: 1500
      })  }
}
