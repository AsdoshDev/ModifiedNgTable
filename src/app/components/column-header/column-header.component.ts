import { Component, OnInit, Input, ViewChild, ElementRef,Output,EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'gsr-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.css']
})
export class ColumnHeaderComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }
  @Input() columnHeaders;
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Input() showFilter: boolean;
  @Input() records: any[]; //if records:[] is given, for some reason , typescript thinks its tuple and not an array, then any[] is given.
  originalRecords: any[];
  columns: any;
  recIndex: any;
  sort = "sort-default";
  @Output() sortIcon = new EventEmitter();

  ngOnInit() {
    if (this.columnHeaderInfo.levelDecider) {
      if (this.columnHeaderInfo.level == 1)
        this.originalRecords = this.dataObj.details;
      else if (this.columnHeaderInfo.level == 3) {
        this.originalRecords = this.dataObj[this.columnHeaderInfo.cusip][this.columnHeaderInfo['index']]["records"];
      }
    } else {
      this.originalRecords = this.dataObj;
    }
  }

  

  filterColumn() {

    this.records = this.originalRecords;
    let filterColumn = [];
    // this.cdr.detectChanges();
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].filterValue !== "" && this.columns[i].filterValue !== "Show All") {
        this.records = this.records.filter(record => {
          if (record[this.columns[i].attrName]) {
            if (this.columns[i].filterBy === "string")
              return (record[this.columns[i].attrName]).toLowerCase().indexOf(this.columns[i].filterValue.toLowerCase()) >= 0;
            else if (this.columns[i].filterBy === "number")
              return (record[this.columns[i].attrName]).replace(/[,]/g, "").indexOf(this.columns[i].filterValue) >= 0;
          }
          else {
            return -1;
          }
        });
      }
    }
    console.log("AFTER");
    console.log(this.records);
    //this.cdr.detectChanges();
  }

  sortColumn(column) {
    if (column.isAscending !== undefined) {
      column.isAscending = !column.isAscending;

    }
    else {
      column.isAscending = false;
    }

    if (column.filterBy === 'number') {
      this.filterByValue(column);
    }
    else if (column.filterBy === 'string') {
      this.filterByName(column);
    }
    debugger;
  this.sort = (!column.isAscending) ? "sort-asc" : "sort-des";
  this.sortIcon.emit(this.sort);
    
  }

  filterByValue(column) {
    // sort by value
    if (!column.isAscending) {
      this.records.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (a[column.attrName]).replace(/[,]/g, "") - (b[column.attrName]).replace(/[,]/g, "");
        else if (a[column.attrName])
          return 1;
        else if (b[column.attrName])
          return -1;
      });
    }
    else {
      this.records.sort(function (a, b) {
        if (a[column.attrName] && b[column.attrName])
          return (b[column.attrName]).replace(/[,]/g, "") - (a[column.attrName]).replace(/[,]/g, "");
        else if (b[column.attrName])
          return 1;
        else if (a[column.attrName])
          return -1;
      });
    }
  }

  filterByName(column) {
    // sort by name
    if (!column.isAscending) {
      this.records.sort(function (a, b) {
        var nameA = a[column.attrName] ? a[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        var nameB = b[column.attrName] ? b[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
    else {
      this.records.sort(function (a, b) {
        var nameA = a[column.attrName] ? a[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        var nameB = b[column.attrName] ? b[column.attrName].toUpperCase() : ""; // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      });
    }
  }

}
