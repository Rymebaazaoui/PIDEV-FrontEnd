import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crudParade.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-update-parade-form',
  templateUrl: './update-parade-form.component.html',
  styleUrls: ['./update-parade-form.component.css']
})
export class UpdateParadeFormComponent implements OnInit {
  UpdateForm: FormGroup;
  getId : any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetParadeOne(this.getId).subscribe(res => {
      this.UpdateForm.setValue({
        Description: res['Description'],
        DateDeb: res['DateDeb'],
        DateFin: res['DateFin'],
        Lieu: res['Lieu'],
        Nb_inscription: res['Nb_inscription']
      });
    });
    this.UpdateForm = this.formBuilder.group({
      Description: [''],
      DateDeb: [''],
      DateFin: [''],
      Lieu: [''],
      Nb_inscription: ['']
    })
  }
  ngOnInit() { }
  onUpdate(): any {
    this.crudService.updateParade(this.getId, this.UpdateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/parade'))
      }, (err) => {
        console.log(err);
    });
  }


}
