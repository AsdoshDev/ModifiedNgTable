import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }
  tabs: any;
  selectedTab: any;

  ngOnInit() {
    this.tabs = [
      { title: 'Search' },
      { title: 'Positions by Security' },
      { title: 'Postings' }
    ];
  }

  changeTabs() {
    let no = this.tabs.length + 1;
    this.tabs.push({ title: no + "th tab" });
  }




}
