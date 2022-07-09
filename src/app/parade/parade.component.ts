import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudService } from './../service/crudParade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parade',
  templateUrl: './parade.component.html',
  styleUrls: ['./parade.component.css']
})
export class ParadeComponent implements OnInit {

  parades:any=[];
  showForm:boolean;

  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,
    
    ) { }

    ngOnInit(): void {
      this.showForm=false;
      this.crudService.GetParade().subscribe(res => {
        console.log(res)
        this.parades =res;
        
      });    
    }

    show(){
      this.showForm=true;
    }

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteParade(id).subscribe((res) => {
          this.parades.splice(i, 1);
  
        })
      }
    }
  

}
