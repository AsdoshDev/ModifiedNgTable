import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gsr-table-pagination',
  templateUrl: './gsr-table-pagination.component.html',
  styleUrls: ['./gsr-table-pagination.component.css']
})
export class GsrTablePaginationComponent implements OnInit {


  @Input() totalRecords;
  @Input() recordsPerPage;
  numbers:any;
  pages:any;
  constructor() { }

  ngOnInit() {
    this.pages = Math.ceil(this.totalRecords/this.recordsPerPage);
    this.numbers =  Array.from(new Array(this.pages), (x,i) => i+1);
  }

}
