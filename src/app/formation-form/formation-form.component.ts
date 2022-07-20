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
  Type_formations:any=[];
  selectedType! : any;

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
      Type : [''],

    })

  }

  ngOnInit(): void {
    this.crudService.GetFormation_type().subscribe(res => {
      console.log(res)
      this.Type_formations =res;
    }); 
  }

  onSubmit(): any {
    this.crudService.AddFormation(this.FormationForm.value, this.selectedType)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/formation'))
      }, (err) => {
        console.log(err);
      });
  }
}
