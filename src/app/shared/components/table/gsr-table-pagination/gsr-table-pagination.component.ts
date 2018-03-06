import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gsr-table-pagination',
  templateUrl: './gsr-table-pagination.component.html',
  styleUrls: ['./gsr-table-pagination.component.css']
})
export class GsrTablePaginationComponent implements OnInit {


  @Input() totalPages;
  @Input() recordsPerPage;
  constructor() { }

  ngOnInit() {
  }

}
