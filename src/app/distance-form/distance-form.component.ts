import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { getDistance } from 'geolib';
import { convertDistance } from 'geolib';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-distance-form',
  templateUrl: './distance-form.component.html',
  styleUrls: ['./distance-form.component.css']
})
export class DistanceFormComponent implements OnInit {

  DistanceForm : FormGroup;


  constructor(public formBuilder: FormBuilder) {
    this.DistanceForm = this.formBuilder.group({
      latitude: [''],
      longitude : ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    const MY_COORDS = {latitude: 36.907281, longitude: 10.301018}
    const address = {latitude: this.DistanceForm.get('latitude')?.value , longitude: this.DistanceForm.get('longitude')?.value}

    let distance = getDistance(MY_COORDS,address)
    let dis = convertDistance(distance, 'km');
    console.log(dis);
    this.DistanceAlert(dis)
  }

  DistanceAlert(x : any){
    Swal.fire('Votre distance est :'+ x + 'KM', 'Amusez vous bien!', 'success')
  }
}
