import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudService} from "../serviceV/crudVisite.service";
import { Visite } from '../models/visite';

@Component({
  selector: 'app-visite-form',
  templateUrl: './visite-form.component.html',
  styleUrls: ['./visite-form.component.css']
})
export class VisiteFormComponent implements OnInit {

  VisiteForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private crudService: CrudService) {

    this.VisiteForm = this.formBuilder.group({
      Description: [''],
      DateDeb : [''],
      DateFin : [''],
    })

  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.crudService.AddVisite(this.VisiteForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/visite'))
      }, (err) => {
        console.log(err);
      });
  }
}
