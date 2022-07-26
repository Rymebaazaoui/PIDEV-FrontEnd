import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CrudVeloService } from '../service/crud-velo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Velo } from '../models/velo';
@Component({
  selector: 'app-velo-form',
  templateUrl: './velo-form.component.html',
  styleUrls: ['./velo-form.component.css']
})
export class VeloFormComponent implements OnInit {

  VeloForm: FormGroup;
  Type_velos:any=[];
  selectedType! : any;
  imageData! : String;

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
        Type : ['']
      })

     }

  ngOnInit(): void {
    this.CrudVeloService.GetVelo_type().subscribe(res => {
      console.log(res)
      this.Type_velos =res;
  })
  }
  Alert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'votre velo est ajoutée avec succès',
      showConfirmButton: false,
      timer: 1500
    })  
  }
  onFileSelect(event: Event){
   /* const file = (event.target as HTMLInputElement).files[0];
    this.VeloForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }*/
   

  }
  onSubmit(event:any): any {
    // let value = new FormData()
    // let image = value.append('image',this.VeloForm.value.image)
    // let marque = value.append('image',this.VeloForm.value.marque)
    // let prix = value.append('image',this.VeloForm.value.prix)
    // let Type = value.append('image',this.VeloForm.value.Type)
    // let description = value.append('image',this.VeloForm.value.description)
    console.table(event) 
    
    this.CrudVeloService.AddVelo(this.VeloForm.value, this.selectedType)
    .subscribe(() => {
        console.log('Data added successfully!')
        
        this.ngZone.run(() => this.router.navigateByUrl('/velo'))
      }, (err) => {
        console.log(err);
    });
  
  }
}
