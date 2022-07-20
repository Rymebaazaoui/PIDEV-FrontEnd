import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../service/crudParade.service';
import { Router } from '@angular/router';
import { Parade } from '../models/parade';
@Component({
  selector: 'app-parade-form',
  templateUrl: './parade-form.component.html',
  styleUrls: ['./parade-form.component.css']
})
export class ParadeFormComponent implements OnInit {

  ParadeForm: FormGroup;
  Type_parades:any=[];
  selectedType! : any;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private crudService: CrudService) {

    this.ParadeForm = this.formBuilder.group({
      Description: [''],
      DateDeb : [''],
      DateFin : [''],
      Lieu : [''],
      Nb_inscription : [''],
      Type : ['']
    })

  }

  ngOnInit(): void {
    this.crudService.GetParade_type().subscribe(res => {
      console.log(res)
      this.Type_parades =res;
    });
  }
  onSubmit(): any {
    this.crudService.AddParade(this.ParadeForm.value, this.selectedType)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/parade'))
      }, (err) => {
        console.log(err);
      });
  }
}
