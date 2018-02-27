import { Component, OnInit } from '@angular/core';
import { TableDataService } from './../services/table-data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  constructor(private data:TableDataService) { }
  tabs: any;
  searchTabs:any;
  selectedTab: any;
  selectedSearchTab:any;
  columnHeaders: any;
  icData: any;
  icData5: any;
  account: any;
  tableInfo:any;
  columnHeaders5: any;
  columnHeaders1:any;
  columnHeaders2:any;
  level: number;
  records: any;
  icData1:any;
  icData2:any;
  tableInfo5:any;
  tableInfo6:any;
  records1:any;
  records2:any;
  ngOnInit() {
    this.tabs = [
      { title: 'Search' },
      { title: 'Positions by Security' },
      { title: 'Postings' }
    ];
    this.searchTabs = [
      { title: 'Filter Security' },
      { title: 'Preview Security' },
      { title: 'Filter Accounts' },
      { title: 'Preview Accounts' },
      { title: 'Content' },
      { title: 'String' },
    ];

    this.columnHeaders = this.data.getLevel3Columns();
    this.tableInfo = this.data.getTableInfo();
    this.icData = this.data.getLevel3();
    this.records = this.icData[this.tableInfo.cusip][0]["records"];
    // this.icData = this.data.getLevel1();
    // this.records = this.icData.details;
    // search icon click / postings screen (As of now)
    this.tableInfo5 = this.data.getTableInfo5();
    this.icData5 = this.data.getAccount();

    // advanced search - preview security
    this.icData1 = this.data.getLevel1();
    this.records1 = this.icData1.details;
    this.tableInfo6 = this.data.getTableInfo6();
    this.columnHeaders1 = this.data.getLevel1Columns();

    // advcanved search - preview accounts
    this.icData2 = this.data.getAcctData();
    this.records2 = this.icData2.details;
    this.tableInfo6 = this.data.getTableInfo6();
    this.columnHeaders2 = this.data.getAcctColumns();
 }

  // changeTabs() {
  //   let no = this.tabs.length + 1;
  //   this.tabs.push({ title: no + "th tab" });
  // }

  getLevel(a) {
    let levelVar, indexVar;
    if (a.index !== undefined && a.index !== "") {
      indexVar = a.index;
    }
    if (a.level !== 2) {
      levelVar = (a.level !== 1) ? (a.level - 1) : (a.level + 1);
    } else {
      levelVar = (a.navigateBack) ? (a.level - 1) : (a.level + 1);
    }

    if (levelVar == 1) {
      this.tableInfo = this.data.getTableInfo1();
      this.columnHeaders = this.data.getLevel1Columns();
      this.icData = this.data.getLevel1();
      this.records = this.icData.details;
    }
    else if (levelVar == 2) {
      this.tableInfo = this.data.getTableInfo2();
      this.columnHeaders = this.data.getLevel2Columns();
      this.icData = this.data.getLevel3();
      this.records = this.icData[a.cusip];
    }
    else if (levelVar == 3) {
      this.tableInfo = this.data.getTableInfo();
      this.columnHeaders = this.data.getLevel3Columns();
      this.icData = this.data.getLevel3();
      this.records = this.icData[a.cusip][indexVar]["records"];
    }
    this.tableInfo.index = indexVar;
    this.tableInfo.level = levelVar;

    if (a.cusip)
      this.tableInfo.cusip = a.cusip;
  }


}
