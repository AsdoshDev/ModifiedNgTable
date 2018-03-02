import { Component, OnInit,Output } from '@angular/core';
import { TableDataService } from './../services/table-data.service';
import { EventEmitter } from '@angular/core';
import {GsrTableComponent} from './../components/gsr-table/gsr-table.component';
import {GsrTabsComponent} from './../components/gsr-tabs/gsr-tabs.component';
import {Utils} from './../shared/utils';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  constructor(private data:TableDataService,public tabComponent:GsrTabsComponent,public utils:Utils) { }
  tabs: any;
  searchTabs:any;
  selectedTab: any;
  advSearchTabClicked:any;
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
  records5:any;
  tableInfo1:any;
  @Output() clickTab = new EventEmitter();
  ngOnInit() {
    this.tabs = [
      { title: 'Search',id:'srch' },
      { title: 'Positions by Security',id:'pbs' },
      { title: 'Postings',id:'pos' }
    ];
    this.searchTabs = [
      { title: 'Filter Security',id:'filterSec' },
      { title: 'Preview Security' ,id:'precSec'},
      { title: 'Filter Accounts' ,id:'filterAccts'},
      { title: 'Preview Accounts',id:'prevAccts' },
      { title: 'Content',id:'content'},
      { title: 'String',id:'strng'},
    ];

    this.columnHeaders = this.data.getLevel3Columns();
    this.tableInfo = this.data.getTableInfo();
    this.icData = this.data.getLevel3();
    this.records = this.icData[this.tableInfo.cusip][0]["records"];
    // this.icData = this.data.getLevel1();
    // this.records = this.icData.details;

    // postings screen (As of now)
    this.tableInfo5 = this.data.getTableInfo7();
    this.icData5 = this.records5 = this.data.getLevel4();
    this.columnHeaders5 = this.data.getLevel3Columns();

    // modal window table
    this.account = this.data.getAccount();
    this.tableInfo1 = this.data.getTableInfo8();

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

  openBreakDtls(){
    debugger;
    var tab =  { title: 'Breaks',id:'breaks'};
    this.tabs.splice(2, 0, tab);
    this.clickTab.emit(tab);
    
  }

  openFailDtls(){
    debugger;
    var tab =  { title: 'Fails',id:'fails'};
    this.tabs.splice(2, 0, tab);
    this.clickTab.emit(tab);
  }

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
