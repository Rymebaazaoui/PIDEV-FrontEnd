import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CrudAssociationService} from "../service/crud-association.service";

@Component({
  selector: 'app-inscription-association-form',
  templateUrl: './inscription-association-form.component.html',
  styleUrls: ['./inscription-association-form.component.css']
})
export class InscriptionAssociationFormComponent implements OnInit {

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

  onSubmit(form:NgForm){
    console.log(form.value)
    const data = {
      Nom : form.value.Nom,
      Prenom : form.value.Prenom,
      Mail : form.value.Mail,
      Association :form.value.Association
    }
    this.crudAssociation.AddInscriptionAssociation(data ,form.value.Association ).subscribe(res=>{
      console.log(res)
      form.reset()
    })
  }


}
