import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CrudAssociationService} from "../service/crud-association.service";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  associations: any
  associationsIns: any
  edit :any
  showForm : boolean=false
  constructor(private crudAssociation: CrudAssociationService) { }

  ngOnInit(): void {
    this.getAss()
    this.getIns()
  }
  getAss() {
    this.crudAssociation.getAssociation().subscribe(res => {
      this.associations = res
      console.log(this.associations)
    })
  }

  delete(id: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudAssociation.deleteParade(id).subscribe(res => {
        console.log(res)
        this.getAss()
        this.edit=undefined
      })
    }
  }

  show(){
    this.showForm=true;
  }

  parentSelected(a:any){
    if(a.message =='Ajout effectué avec succès!' || a.message =='association was updated successfully!' ){
      this.getAss()
    }
    console.log("a=======",a)
  }
  update(data :any){
    this.showForm=true;
    console.log(data)
    this.edit = data
  }

  getIns(){
    this.crudAssociation.GetInsriptionAssociation().subscribe(res=>{
      this.associationsIns =res
      console.log('ins',this.associationsIns)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('aaaaaaaaaaa',changes)
  }

  deleteInscription(id:any) {
    console.log(id)
    if (window.confirm('Do you want to go ahead?')) {
      this.crudAssociation.deleteInscriptionAssociation(id).subscribe(res => {
        console.log(res)
        this.getIns()
      })

    }

  }
}
