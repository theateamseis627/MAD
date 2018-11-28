import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decide-view',
  templateUrl: './decide-view.component.html',
  styleUrls: ['./decide-view.component.css']
})
export class DecideViewComponent implements OnInit {
  currentJustify = 'justified';
  constructor() { }

  ngOnInit() {
  }

}
