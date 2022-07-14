import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudVeloService } from './../service/crud-velo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-velo',
  templateUrl: './velo.component.html',
  styleUrls: ['./velo.component.css']
})
export class VeloComponent implements OnInit {

  velos:any=[];
  showForm:boolean;

  constructor(private CrudVeloService: CrudVeloService,
    private router: Router,
    private ngZone: NgZone,
    
    ) { }

    ngOnInit(): void {
      this.showForm=false;
      this.CrudVeloService.GetVelo().subscribe(res => {
        console.log(res)
        this.velos =res;
        
      });    
    }

    show(){
      this.showForm=true;
    }

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.CrudVeloService.deleteVelo(id).subscribe((res) => {
          this.velos.splice(i, 1);
  
        })
      }
    }
  

}
