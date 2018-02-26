import { Component, OnInit, Input, Output } from '@angular/core';
import { TableDataService } from './../../services/table-data.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'gsr-tabs',
  templateUrl: './gsr-tabs.component.html',
  styleUrls: ['./gsr-tabs.component.css']
})
export class GsrTabsComponent implements OnInit {
  //@ViewChild('li') el:ElementRef;
  @Input() tabs;
  @Input() tabNavigation;
  columnHeaders: any;
  icData: any;
  icData5: any;
  account: any;
  tableInfo:any;
  columnHeaders5: any;
  level: number;
  records: any;
  tableInfo5:any;
  @Output() passTabIndex = new EventEmitter();

  constructor(private data: TableDataService) {

  }

  navigateTab(nextTab) {
    let activeTab = this.tabs.filter(function (tab) {
      return tab.isClicked == "active";
    });
    let index = nextTab ? this.tabs.indexOf(activeTab[0]) + 1 : this.tabs.indexOf(activeTab[0]) - 1;
    let targetTab = this.tabs[index];
    if (targetTab)
      this.selectTab(targetTab, index);
  }

  ngOnInit() {
    this.tabs[1].isClicked = "active";
    this.columnHeaders = this.data.getLevel3Columns();
    this.tableInfo = this.data.getTableInfo();
    this.icData = this.data.getLevel3();
    this.records = this.icData[this.tableInfo.cusip][0]["records"];
   
    // this.icData = this.data.getLevel1();
    // this.records = this.icData.details;
    this.tableInfo5 = this.data.getTableInfo5();
    this.icData5 = this.data.getAccount();
  }

  ngAfterViewInit() {
  }

  selectTab(tab, index?) {
    if (tab.isClicked !== "active" || !index) {
      this.tabs.forEach(tab => tab.isClicked = "");
      tab.isClicked = "active";
      tab.index = index;
      //pass Tab index to change content based on clicked tab
      this.passTabIndex.emit(tab);
    }
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


