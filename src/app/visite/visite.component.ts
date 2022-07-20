import { HttpErrorResponse } from '@angular/common/http';
import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CrudServiceVisite } from '../service/service-visite/crud-visite.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {

  visites:any=[];
  lieu:any;
  nomLieu:any
  showForm:boolean;
  showDistance:boolean;
  searchText = "";
  constructor(private crudService: CrudServiceVisite,
              private router: Router,
              private ngZone: NgZone,

  ) { }

  dataBeforeParse : any;
  dataAfterParse : any;
  ngOnInit(): void {
    this.showForm=false;
    this.showDistance=false;
    this.crudService.GetVisite().subscribe(res => {
      console.log(res)
      this.visites =res;



    });


  }

  getLieuById (nomLieu:any) :any {
    this.crudService.GetLieuById(nomLieu).subscribe(res => {

        this.lieu=res;//get nom of lieu

        return  this.lieu;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert("eee"+error.message);
      }
    );

  }







  show(){
    this.showForm=true;
  }

  showFormDistance(){

    this.showDistance=true;
  }

  deleteVisite(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteVisite(id).subscribe((res) => {
        this.  visites.splice(i, 1);

      })
    }
  }

  model : any={};

  searchdata() {


    this.crudService.SearchBetweenDates(this.model).subscribe((res: any) => {
      this.model.DateD= new Date(res.DateD);
      this.model.DateF= new Date(res.DateF);
      this.visites.DateD = this.model.DateD;
      this.visites.DateF = this.model.DateF;
      this.visites=res;
      alert(JSON.stringify(res));
    })
  }
}
