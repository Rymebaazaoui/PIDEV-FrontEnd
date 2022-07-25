import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudFormationService } from '../service/crud-formation.service';
import { Inscription_formation } from '../models/Inscription_formations';

import { Subscription } from 'rxjs/internal/Subscription';



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
    private crudService: CrudFormationService,private route: ActivatedRoute) {

      this.InscriptionForm = this.formBuilder.group({
        nom: [''],
        prenom : [''],
        mail : [''],
        Formation : ['']
      })

     }

     ngOnInit(): void {
      this.crudService.GetFormation().subscribe(res => {
        console.log(res)
        this.formations =res;
      }); 
      // var route
      // var routeSub = this.route.params.subscribe(params => {
      //   console.log(params) //log the entire params object
      //   console.log(params['id']) //log the value of id
      //    route = params['id']
      // });console.log('trrr',route)
 
  }
  onSubmit(): any {
    this.crudService.AddInscriptionFormation(this.InscriptionForm.value, this.selectedType)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/listFormations'))
      }, (err) => {
        console.log(err);
    });
  }

}
