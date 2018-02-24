import { Component, OnInit,Input,Output } from '@angular/core';
import {TableDataService} from './../../services/table-data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-tabs',
  templateUrl: './gsr-tabs.component.html',
  styleUrls: ['./gsr-tabs.component.css']
})
export class GsrTabsComponent implements OnInit {
//@ViewChild('li') el:ElementRef;
@Input() tabs;
columnHeaderInfo:any;
icData:any;
icData5:any;
account:any;
columnHeaderInfo5:any;
level:number;
records:any;
@Output() sendTab = new EventEmitter();

constructor(private data: TableDataService) { }



ngOnInit() {
  this.tabs[0].isClicked = "active";
  this.columnHeaderInfo = this.data.getLevel3Columns();
  
  this.icData = this.data.getLevel3();
  this.records = this.icData[this.columnHeaderInfo.cusip][0]["records"];

  // this.icData = this.data.getLevel1();
  // this.records = this.icData.details;

  this.columnHeaderInfo5 = this.data.getLevel5Columns();
  this.icData5 = this.data.getAccount();
}

ngAfterViewInit() {
}

selectTab(tab,index){
  if(tab.isClicked !== "active"){
    this.tabs.forEach(tab=> tab.isClicked = "");
    tab.isClicked = "active";
    tab.index = index;
    this.sendTab.emit(tab);
  }
  
}


getLevel(a){
  let levelVar,indexVar;
  if(a.index !== undefined && a.index !== ""){
    indexVar = a.index;
  }
  debugger;
  if(a.level !==2){
        levelVar = (a.level !== 1) ? (a.level-1) : (a.level+1);
  }else{
        levelVar = (a.navigateBack) ? (a.level-1) : (a.level+1);
  }

      if(levelVar == 1){
        this.columnHeaderInfo = this.data.getLevel1Columns();
        this.icData = this.data.getLevel1();
        this.records = this.icData.details;
      }
      else if(levelVar == 2){
        this.columnHeaderInfo = this.data.getLevel2Columns();
        this.icData = this.data.getLevel3();
        this.records = this.icData[a.cusip];
      }
      else if(levelVar == 3){
        this.columnHeaderInfo = this.data.getLevel3Columns();
        this.icData = this.data.getLevel3();
        this.records = this.icData[a.cusip][indexVar]["records"];
        debugger;

      }
      this.columnHeaderInfo.index = indexVar;
      this.columnHeaderInfo.level = levelVar;
      
      if(a.cusip)
        this.columnHeaderInfo.cusip = a.cusip;

      

}

}


