import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudVeloService } from '../service/crud-velo.service';
import { Router } from '@angular/router';
import { Velo } from '../models/velo';
@Component({
  selector: 'app-velo-form',
  templateUrl: './velo-form.component.html',
  styleUrls: ['./velo-form.component.css']
})
export class VeloFormComponent implements OnInit {

  VeloForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private CrudVeloService: CrudVeloService) {

      this.VeloForm = this.formBuilder.group({
        marque: [''],
        image : [''],
        prix : [''],
        description : [''],
        quantite : [''],
      })

     }

  ngOnInit(): void {}

  onSubmit(): any {
    this.CrudVeloService.AddVelo(this.VeloForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/velo'))
      }, (err) => {
        console.log(err);
    });
  }
}
