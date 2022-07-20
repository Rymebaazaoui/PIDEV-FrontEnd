import { Component, OnInit } from '@angular/core';
import { CrudFormationService } from '../service/crud-formation.service';
import { NgForm } from '@angular/forms';

declare let Email: any;

@Component({
  selector: 'app-email-formation-form',
  templateUrl: './email-formation-form.component.html',
  styleUrls: ['./email-formation-form.component.css']
})
export class EmailFormationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
