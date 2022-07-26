import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{CrudUserService}from '../service/crud-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any=FormGroup;
  users:any=[];
    constructor(private fb:FormBuilder,private router:Router, private compteserv:CrudUserService) { }
  
    ngOnInit(): void {
  
      this.login=this.fb.group({
        email:[''],
        mdp:['']
        
        
      })
      
    }
  
    loginSubmit(data:any){
      
          if(this.login.value.mdp === data.mdp && this.login.value.email === data.email){
  
          localStorage.setItem("isLoggedIn","true");
          
          this.router.navigate(['dashboard'])
            console.log("user is valid");
          }
          else{
            localStorage.clear();
            console.log("user in invalid");
          }
        
  }
  

}
