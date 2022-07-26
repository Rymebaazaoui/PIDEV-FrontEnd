import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudVeloService } from './../service/crud-velo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-velo',
  templateUrl: './client-velo.component.html',
  styleUrls: ['./client-velo.component.css']
})
export class ClientVeloComponent implements OnInit {
  velos:any=[];
  constructor(private CrudVeloService: CrudVeloService,
    private router: Router,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
    this.CrudVeloService.GetVelo().subscribe(res => {
      console.log(res)
      this.velos =res;
     }); 
  }

}
