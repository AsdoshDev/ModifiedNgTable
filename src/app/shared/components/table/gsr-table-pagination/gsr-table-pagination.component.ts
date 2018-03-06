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
  constructor() { }

  ngOnInit() {
   
    this.numbers =  Array.from(new Array(Math.ceil(this.totalRecords/this.recordsPerPage)), (x,i) => i+1)

    console.log(this.totalRecords);
    console.log(this.recordsPerPage);

  }

}
