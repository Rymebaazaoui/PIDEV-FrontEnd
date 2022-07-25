import { Component, OnInit, NgZone,EventEmitter, Input, Output} from '@angular/core';
import { CrudService } from './../service/crudParade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {
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
