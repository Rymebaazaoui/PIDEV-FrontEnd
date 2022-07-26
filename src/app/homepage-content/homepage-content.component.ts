import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudService } from './../service/crudParade.service';
import { Router } from '@angular/router';
import { CrudFormationService } from '../service/crud-formation.service';
import { CrudVeloService } from '../service/crud-velo.service';


@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {
  parades:any=[];
  formations:any=[];
  velos:any=[];
  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,
    private crudeFormationService : CrudFormationService,
    private crudeVeloService : CrudVeloService) { }

  ngOnInit(): void {
    this.crudService.GetParade().subscribe(res => {
      console.log(res)
      this.parades =res;
     }); 
     this.crudeFormationService.GetFormation().subscribe(res => {
      console.log(res)
      this.formations =res;
     }); 
     this.crudeVeloService.GetVelo().subscribe(res => {
      console.log(res)
      this.velos =res;
     }); 
  }



}
