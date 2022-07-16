import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudService } from './../service/crudParade.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-parade',
  templateUrl: './client-parade.component.html',
  styleUrls: ['./client-parade.component.css']
})
export class ClientParadeComponent implements OnInit {
  parades:any=[];
  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
    this.crudService.GetParade().subscribe(res => {
      console.log(res)
      this.parades =res;
     }); 
  }

}
