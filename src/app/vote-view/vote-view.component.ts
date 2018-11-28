import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote-view.component.html',
  styleUrls: ['./vote-view.component.css']
})
export class VoteViewComponent implements OnInit {
  test: string;
  constructor() { }

  ngOnInit() {
    this.test = 'Binding works!';
  }

}
