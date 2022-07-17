import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudReservationService } from './../service/crud-reservation.service';
import { Router } from '@angular/router';

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

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudReservationService.deleteReservation(id).subscribe((res) => {
          this.reservations.splice(i, 1);
  
        })
      }
    }
  

}
