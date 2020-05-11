import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interfaces/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
@Input() myPerson:Person;
innovationEdit:string = '';
editing:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  editingInnovation = function():void{
    this.editing = true;
  }

  editInnovation = function(m:Person){
    m.innovation = this.innovationEdit;
    this.innovationEdit = '';
  }

  cancelEditInnovation = function():void{
    this.innovationEdit = '';
    this.editing = false;
  }
}
