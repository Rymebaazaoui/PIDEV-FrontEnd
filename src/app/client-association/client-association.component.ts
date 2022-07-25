import { Component, OnInit } from '@angular/core';
import {CrudAssociationService} from "../service/crud-association.service";

@Component({
  selector: 'app-client-association',
  templateUrl: './client-association.component.html',
  styleUrls: ['./client-association.component.css']
})
export class ClientAssociationComponent implements OnInit {

  associations:any

  constructor(private crudAssociation: CrudAssociationService) { }

  ngOnInit(): void {
    this.getAss()
  }

  getAss() {
    this.crudAssociation.getAssociation().subscribe(res => {
      this.associations = res
      console.log(this.associations)
    })
  }


}
