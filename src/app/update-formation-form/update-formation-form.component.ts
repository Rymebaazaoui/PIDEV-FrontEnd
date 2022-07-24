import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { CrudFormationService } from '../service/crud-formation.service'
@Component({
  selector: 'app-update-formation-form',
  templateUrl: './update-formation-form.component.html',
  styleUrls: ['./update-formation-form.component.css']
})
export class UpdateFormationFormComponent implements OnInit {
  UpdateForm: FormGroup;
  getId : any;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudFormationService) 
    
    { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetOneFormation(this.getId).subscribe(res => {
      this.UpdateForm.setValue({
      TitreDeFormation: res['TitreDeFormation'],
      NomFormateur: res['NomFormateur'],
      Description: res['Description'],
      NombreDeParticiants: res['NombreDeParticiants'],
      DateDebut: res['DateDebut'],
      DateFin: res['DateFin'],
    });
  });
  this.UpdateForm = this.formBuilder.group({

     TitreDeFormation: [''],
      NomFormateur : [''],
      Description : [''],
      NombreDeParticiants : [''],
      DateDebut : [''],
      DateFin : ['']      
  })
}

  ngOnInit() {}
    onUpdate(): any {
      this.crudService.updateFormation(this.getId, this.UpdateForm.value)
      .subscribe(() => {
          console.log('Data updated successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/formation'))
        }, (err) => {
          console.log(err);
      });
    }
  } 
