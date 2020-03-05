import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.scss']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015,7,12);
  constructor() { }

  ngOnInit() {
  }

}
