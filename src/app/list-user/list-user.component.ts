import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CrudUserService}from '../service/crud-user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList:any=[];

  showForm:Boolean;
    constructor(private compteService:CrudUserService, private router:Router) { }
  
    ngOnInit(): void {
      this.showForm=false;
      this.compteService.getUser().subscribe(res =>{
  console.log(res)
        this.userList =res;
      } );
        
    }
    deleteUser(id:any, i:any) {
      console.log(id);
      if(window.confirm('Once deleted, you will no longer be able to retrieve this item. Do you still want to go ahead?')) {
        this.compteService.deleteUser(id).subscribe((res) => {
          this.userList.splice(i, 1);
  
        })
      }
    }
    logout(){
      localStorage.clear();
      this.router.navigate(['login']);
    }
    show(){
      this.showForm=true;
    }

}
