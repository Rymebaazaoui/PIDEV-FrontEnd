import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudVeloService } from '../service/crud-velo.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-velo',
  templateUrl: './update-velo.component.html',
  styleUrls: ['./update-velo.component.css']
})
export class UpdateVeloComponent implements OnInit {
  UpdateForm: FormGroup;
  getId : any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private CrudVeloService: CrudVeloService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.CrudVeloService.GetVeloOne(this.getId).subscribe(res => {
      this.UpdateForm.setValue({
        marque: res['marque'],
        image: res['image'],
        prix: res['prix'],
        description: res['description'],
        quantite: res['quantite']
      });
    });
    this.UpdateForm = this.formBuilder.group({
      marque: [''],
      image: [''],
      prix: [''],
      description: [''],
      quantite: ['']
    })
  }
  ngOnInit() { }
  Alert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'votre velo est à jour',
      showConfirmButton: false,
      timer: 1500
    })  
  }
  onUpdate(): any {
    this.CrudVeloService.updateVelo(this.getId, this.UpdateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.Alert()
        this.ngZone.run(() => this.router.navigateByUrl('/velo'))
      }, (err) => {
        console.log(err);
    });
  }


}
