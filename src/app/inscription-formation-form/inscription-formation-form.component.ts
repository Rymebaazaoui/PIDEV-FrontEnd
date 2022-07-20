import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudFormationService } from '../service/crud-formation.service';
import { Inscription_formation } from '../models/Inscription_formations';


@Component({
  selector: 'app-inscription-formation-form',
  templateUrl: './inscription-formation-form.component.html',
  styleUrls: ['./inscription-formation-form.component.css']
})
export class InscriptionFormationFormComponent implements OnInit {

  InscriptionForm: FormGroup;
  formations:any=[];
  selectedType! : any;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudFormationService) {

      this.InscriptionForm = this.formBuilder.group({
        Nom: [''],
        Prenom : [''],
        Mail : [''],
        Formation : ['']
      })

     }

     ngOnInit(): void {
      this.crudService.GetFormation().subscribe(res => {
        console.log(res)
        this.formations =res;
      }); 
    }
  onSubmit(): any {
    this.crudService.AddInscriptionParade(this.InscriptionForm.value, this.selectedType)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/listParade'))
      }, (err) => {
        console.log(err);
    });
  }

}
