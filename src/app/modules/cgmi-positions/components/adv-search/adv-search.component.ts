import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.css']
})
export class AdvSearchComponent implements OnInit {
@Input() advSearchTabClicked;
@Input() records;
@Input() columnHeaders;
@Input() dataObj;
@Input() columnHeaderInfo;
@Input() searchTabs;

  constructor() { }

  ngOnInit() {
  }

}
