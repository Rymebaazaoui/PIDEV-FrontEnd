import { Component, NgZone, OnInit } from '@angular/core';
import { CrudUserService } from '../service/crud-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  registre: FormGroup;
  user:any=[];
  
  constructor(private formBuilder:FormBuilder,private router:Router,private compteserv:CrudUserService ) {}

  ngOnInit(): void {
    //this.user=new User();
    this.registre=this.formBuilder.group({
      nom:[''],
      prenom:[''],
      date_naissance:[''],
      email:[''],
      mdp:[''],
      Role:['']
      
    
    })
    
  }
  registreSubmit():any{
    
    this.compteserv.AddUser(this.registre.value).subscribe((data:any) =>{
      console.log(data);
      this.router.navigate(['dashboard'])
    })
  }

}
