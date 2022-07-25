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
  Inscriptions:any=[];
  type_parade:any=[];
  showForm:boolean;
  showDistance:boolean;
  searchText = "";
  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone,
    
    ) { }

    ngOnInit(): void {
      this.showForm=false;
      this.showDistance=false;
      this.crudService.GetParade().subscribe(res => {
        console.log(res)
        this.parades =res;
       }); 
       this.crudService.GetInsriptionParade().subscribe(res => {
        console.log(res)
        this.Inscriptions =res;
       });  
    }

    show(){
      this.showForm=true;
    }

    showFormDistance(){
      this.showDistance=true;
    }

    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteParade(id).subscribe((res) => {
          this.parades.splice(i, 1);
  
        })
      }
    }

    deleteInscription(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteInscriptionParade(id).subscribe((res) => {
          this.Inscriptions.splice(i, 1);
  
        })
      }
    }

    /*Search(){
      // alert(this.searchText)
       if(this.searchText!== ""){
         let searchValue = this.searchText.toLocaleLowerCase();
        
         this.parades = this.parades.filter((contact:any) =>{
           return contact.name.toLocaleLowerCase().match(searchValue )
           ;
         // you can keep on adding object properties here   
         
               });
               
               console.log(this.parades);
             }
             else { 
              this.crudService.GetParade().subscribe(res => {
                console.log(res)
                this.parades =res;
               });
             } 
         }*/
  

}
