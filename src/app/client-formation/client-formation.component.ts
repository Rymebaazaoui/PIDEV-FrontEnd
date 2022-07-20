import { Component, OnInit, NgZone,EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {CrudFormationService} from '../service/crud-formation.service';


@Component({
  selector: 'app-client-formation',
  templateUrl: './client-formation.component.html',
  styleUrls: ['./client-formation.component.css']
})
export class ClientFormationComponent implements OnInit {

  formations:any=[];
  constructor(private crudService: CrudFormationService,
    private router: Router,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
    this.crudService.GetFormation().subscribe(res => {
      console.log(res)
      this.formations =res;
     }); 
  }

}