import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TableDataService } from './../../services/table-data.service';
import { GsrTabsComponent } from './../../shared/components/gsr-tabs/gsr-tabs.component';
import { Utils } from './../../shared/utils';

@Component({
  selector: 'cgmi-positions',
  templateUrl: './cgmi-positions.component.html',
  styleUrls: ['./cgmi-positions.component.css']
})
export class CgmiPositionsComponent implements OnInit {

  @ViewChild(GsrTabsComponent) tabsComponent: GsrTabsComponent;
  constructor(private data: TableDataService, public utils: Utils) { }
  tabs: any;
  searchTabs: any;
  selectedTab: any;
  advSearchTabClicked: any;
  columnHeaders: any;
  icData: any;
  icData5: any;
  account: any;
  tableInfo: any;
  columnHeaders5: any;
  columnHeaders1: any;
  columnHeaders2: any;
  level: number;
  records: any;
  icData1: any;
  icData2: any;
  tableInfo5: any;
  tableInfo6: any;
  records1: any;
  records2: any;
  records5: any;
  tableInfo1: any;
  ngOnInit() {
    this.tabs = [
      { title: 'Search', id: 'srch' },
      { title: 'Positions by Security', id: 'pbs' }
    ];
    this.searchTabs = [
      { title: 'Filter Security', id: 'filterSec' },
      { title: 'Preview Security', id: 'precSec' },
      { title: 'Filter Accounts', id: 'filterAccts' },
      { title: 'Preview Accounts', id: 'prevAccts' },
      { title: 'Content', id: 'content' },
      { title: 'String', id: 'strng' },
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

  onTabChanges(tab) {
    this.selectedTab = tab;

    if (tab.id == 'pbs') {
      let arr = ['breaks', 'fails', 'open'];
      let modifiedTabs = this.tabs.filter(function (tab) {
        return (arr.indexOf(tab.id) < 0)
      });
      this.tabs = modifiedTabs;


      if (this.tabs.findIndex(tab => tab.id == 'pos') < 0) {
        let posTab = { title: 'Postings', id: 'pos' };
        this.tabs.splice(2, 0, posTab);
      }
    }
  }


  columnClickAction(data) {
    console.log("column clicked");
    console.log(data);
    this.showOpenDtls();
  }

  showBreakDtls() {
    var tab = { title: 'Breaks', id: 'breaks' };
    if (this.tabs.findIndex(tab => tab.id == 'breaks') < 0)
      this.tabs.splice(2, 0, tab);
    this.tabsComponent.selectTab(this.tabs[2]);

  }

  showFailDtls() {
    this.tabs.splice((this.tabs.findIndex(tab => tab.id == 'pos')), 1);
    var tab = { title: 'Fails', id: 'fails' };
    if (this.tabs.findIndex(tab => tab.id == 'fails') < 0)
      this.tabs.splice(2, 0, tab);
    this.tabsComponent.selectTab(this.tabs[2]);

  }

  showOpenDtls() {
    var tab = { title: 'Open Items', id: 'open' };
    if (this.tabs.findIndex(tab => tab.id == 'open') < 0)
      this.tabs.splice(2, 0, tab);
    this.tabsComponent.selectTab(this.tabs[2]);
    this.tabs.splice((this.tabs.findIndex(tab => tab.id == 'pos')), 1);
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
