import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudFormationService} from "../service/crud-formation.service";
import { Formation } from '../models/formations';


@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {

  FormationForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private crudService: CrudFormationService) {

    this.FormationForm = this.formBuilder.group({
      TitreDeFormation: [''],
      NomFormateur : [''],
      Description : [''],
      NombreDeParticiants : [''],
      DateDebut : [''],
      DateFin : [''],

    })

  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.crudService.AddFormation(this.FormationForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/formation'))
      }, (err) => {
        console.log(err);
      });
  }
}
