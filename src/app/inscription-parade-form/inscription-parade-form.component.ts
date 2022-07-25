import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../service/crudParade.service';
import { Router } from '@angular/router';
import { Inscription_parade } from '../models/Inscription_parade';

@Component({
  selector: 'app-inscription-parade-form',
  templateUrl: './inscription-parade-form.component.html',
  styleUrls: ['./inscription-parade-form.component.css']
})
export class InscriptionParadeFormComponent implements OnInit {

  InscriptionForm: FormGroup;
  parades:any=[];
  selectedType! : any;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {

      this.InscriptionForm = this.formBuilder.group({
        Nom: [''],
        Prenom : [''],
        Mail : [''],
        Parade : ['']
      })

     }

     ngOnInit(): void {
      this.crudService.GetParade().subscribe(res => {
        console.log(res)
        this.parades =res;
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
