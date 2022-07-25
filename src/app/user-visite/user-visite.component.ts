import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudServiceVisite} from "../service/service-visite/crud-visite.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-visite',
  templateUrl: './user-visite.component.html',
  styleUrls: ['./user-visite.component.css']
})
export class UserVisiteComponent implements OnInit {
  VisiteForm: FormGroup;
  lieux: any=[];
  visites:any=[];


  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private crudService: CrudServiceVisite) {

    this.VisiteForm = this.formBuilder.group({
      Description: [''],
      DateD : [''],
      DateF : [''],
      nom: ['']
    })

  }

  ngOnInit(): void {

    this.crudService.GetLieu().subscribe((res: any) => {
      console.log(res)
      this.lieux =res;
    });

  }

  onAddVisite(): any {

    this.crudService.AddVisite(this.VisiteForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Visit added successfully',
          showConfirmButton: false,
          timer: 1500
        })


        this.gotoVisite() ;
      }, (err) => {
        console.log(err);
      });
  }

  gotoVisite() {
    window.location.reload();
    this.router.navigate(['/visite']);

  }
  model : any={};

  searchdata() {


  this.crudService.SearchBetweenDates(this.model).subscribe((res: any) => {
      this.model.DateD= new Date(res.DateD);
      this.model.DateF= new Date(res.DateF);
      this.visites.DateD = this.model.DateD;
      this.visites.DateF = this.model.DateF;
      this.visites=res;
     // alert(JSON.stringify(res));
    })
  }
}

