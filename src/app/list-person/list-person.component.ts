import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name: "Ti", age: 20 },
    { name: "Teo", age: 22 },
    { name: "Tun", age: 30 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
