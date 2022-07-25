import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { Visite } from '../models/visite';
import { CrudServiceVisite } from '../service/service-visite/crud-visite.service';

@Component({
  selector: 'app-visite-form',
  templateUrl: './visite-form.component.html',
  styleUrls: ['./visite-form.component.css']
})
export class VisiteFormComponent implements OnInit {

  VisiteForm: FormGroup;
  lieux: any=[];

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
}
