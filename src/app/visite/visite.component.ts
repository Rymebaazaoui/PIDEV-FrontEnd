import {Component, NgZone, OnInit} from '@angular/core';
import {CrudService} from "../serviceV/crudVisite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
  visites:any=[];
  showForm:boolean;
  constructor(private crudService: CrudService,
              private router: Router,
              private ngZone: NgZone,

  ) { }

  ngOnInit(): void {

    this.showForm=false;
    this.crudService.GetVisite().subscribe(res => {
      console.log(res)
      this.visites =res;

    });
  }

  show(){
    this.showForm=true;
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteVisite(id).subscribe((res) => {
        this.visites.splice(i, 1);

      })
    }
  }


}
