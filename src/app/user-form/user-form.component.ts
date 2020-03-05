import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighLight = true;
  eventStyle = {color:'red', fontSize:'30px'};
  oddStyle = {color:'black', fontSize:'60px'};
  currentClass = { circle : !this.isHighLight, square: this.isHighLight};
  constructor() { }

  ngOnInit() {
  }
}
