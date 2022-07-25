import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Association} from "../association/association";
import {CrudAssociationService} from "../service/crud-association.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-association-form',
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.css']
})
export class AssociationFormComponent implements OnInit {

  @Output()
  parentSelectedEventEmitter = new EventEmitter();
  allType: any
  @Input() item: Association
  constructor(private crudAssociation: CrudAssociationService) { }

  ngOnInit(): void {
    this.getAllType()
    console.log('chiiiild', this.item)
  }


  getAllType() {
    this.crudAssociation.getTypeAssociation().subscribe(res => {
      this.allType = res
      console.log(this.allType)
    })
  }

  onSubmit(form: NgForm) {
    const data = {
      Description: form.value.Description,
      Nb_participant: form.value.Nb_participant
    }
    if (form.value._id) {
      console.log(form.value._id)
      this.crudAssociation.updateParade(form.value._id , data).subscribe(res=>{
        console.log(res)
        this.parentSelectedEventEmitter.emit(res);
      })
      form.reset()
      this.item= {} as Association

    } else {

      console.log(data)
      this.crudAssociation.addAssociation(data, form.value.Type).subscribe(res => {
        console.log(res)
        this.parentSelectedEventEmitter.emit(res);
      })
      form.reset()
    }

  }

}
