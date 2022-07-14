import {Component, NgZone, OnInit} from '@angular/core';
import {CrudFormationService} from "../service/crud-formation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  formations:any=[];
  showForm:boolean;

  constructor(private crudFormationService: CrudFormationService,
    private router: Router,
    private ngZone: NgZone,

    ) { }

    ngOnInit(): void {
      this.showForm=false;
      this.crudFormationService.GetFormation().subscribe(res => {
        console.log(res)
        this.formations =res;

      });
    }

    show(){
      this.showForm=true;
    }

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Once deleted, you will no longer be able to retrieve this item. Do you still want to go ahead?')) {
        this.crudFormationService.deleteFormation(id).subscribe((res) => {
          this.formations.splice(i, 1);

        })
      }
    }


}
