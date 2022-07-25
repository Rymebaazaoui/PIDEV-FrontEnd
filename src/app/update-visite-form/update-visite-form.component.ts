import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudServiceVisite } from '../service/service-visite/crud-visite.service';
import { Visite } from '../models/visite';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-Visite-form',
  templateUrl: './update-Visite-form.component.html',
  styleUrls: ['./update-Visite-form.component.css']
})
export class UpdateVisiteFormComponent implements OnInit {
  UpdateForm: FormGroup;

  public DateD:Date;
  DateF:Date;
  visite : Visite
  newVisite: any;
  lieux: any=[];
  getId : any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudServiceVisite
  ) {

  }

  ngOnInit(): void {
    this.GetVisiteOne();
    this.crudService.GetLieu().subscribe(res => {
      console.log(res)
      this.lieux =res;
    });
  }


  public GetVisiteOne(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetVisiteOne(this.getId).subscribe(res => {

        this.visite = res;
        console.log(this.visite);
        this.DateD= new Date(res.DateD);
        this.DateF= new Date(res.DateF);
        this.visite.DateD = this.DateD;
        this.visite.DateF = this.DateF;

      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);

      }
    );
  }


  dateChanged(eventDate: string): any{
    return !!eventDate ? new Date(eventDate) : null;
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return new Date();
  }




  public onUpdate(visite: Visite) {
    Swal.fire({
      title: 'Editer ce visite ',
      text: " Voullez vous vraimenet editer ce visite?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Editer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudService.updateVisite(this.getId,visite).subscribe(
          (response: Visite) => {
            console.log(response);
            this.GetVisiteOne();


          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
        Swal.fire(
          'Modification',
          'Visite a ete modifiée avec success!',
          'success'
        )

        this.gotoVisite();
      }
    })


  }

  gotoVisite() {
    this.router.navigate(['/visite']);

  }


}
