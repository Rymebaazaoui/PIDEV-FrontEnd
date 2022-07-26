import {Component, NgZone, OnInit} from '@angular/core';
import {CrudFormationService} from "../service/crud-formation.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  formations:any=[];
  showForm:boolean;

  constructor(private crudFormationService: CrudFormationService,
    private router: Router,
    private ngZone: NgZone,

    ) { }

    ngOnInit(): void {
      this.showForm=false;
      this.crudFormationService.GetFormation().subscribe(res => {
        console.log(res)
        this.formations =res;

      });
    }

    show(){
      this.showForm=true;
    }

    // delete(id:any, i:any) {
    //   console.log(id);
    //   if(window.confirm()) {
    //     this.crudFormationService.deleteFormation(id).subscribe((res) => {
    //       this.formations.splice(i, 1);

    //     })
    //   }
    // }
    model : any={};

    searchdata() {
    this.crudFormationService.SearchFormationPerDates(this.model).subscribe((res: any) => {
      this.model.DateDebut= new Date(res.DateDebut);
      this.model.DateFin= new Date(res.DateFin);
      this.formations.DateDebut = this.model.DateDebut;
      this.formations.DateFin = this.model.DateFin;
      this.formations=res;
     // alert(JSON.stringify(res));
    })
  }
  delete(id:any, i:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (window.confirm()) {
        this.crudFormationService.deleteFormation(id).subscribe((res) => {
          this.formations.splice(i, 1);
        })
        Swal.fire(
          'Deleted!',
          'Your file has been successfully deleted.',
          'success'
        )
    }
  })
  }
}
