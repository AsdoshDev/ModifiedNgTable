import { Component, OnInit,Input,Output,ViewChild,ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Utils} from './../../../../shared/utils';

@Component({
  selector: 'gsr-table',
  templateUrl: './gsr-table.component.html',
  styleUrls: ['./gsr-table.component.css']
})
export class GsrTableComponent implements OnInit {
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Input() levelInfo;
  @Input() columnHeaders;
  @Input() records;
  @Output() sendLevel = new EventEmitter();
  originalRecords:any;
  showFilter: boolean;
  recIndex:any;
  tableLevel : any;
  @ViewChild('tableScroller') tableScroller: ElementRef;
  cusipId:any;
  constructor(public utils:Utils) { }


  getLevel(levelDtls){
    this.sendLevel.emit(levelDtls);
  }
  

  ngAfterViewInit() {  }

  ngAfterContentChecked(){
    if(this.columnHeaderInfo.tableType !== "columnTable"){
      if(this.columnHeaderInfo.levelDecider){
      if(this.columnHeaderInfo['level'] == 1)
        this.originalRecords = this.dataObj.details;
     else  if(this.columnHeaderInfo['level'] == 3){
        this.originalRecords = this.dataObj[this.columnHeaderInfo.cusip][this.columnHeaderInfo['index']]["records"];
     }
        //this.cusipId = this.data.getCusipId();
    }else{
      this.originalRecords = this.dataObj;
    }
    }
  }
  ngOnInit() {}


 /* FUNCTIONS FOR GSR-TABLE-HEADER STARTS HERE */

 
 
   /* FUNCTIONS FOR GSR-TABLE-HEADER ENDS HERE */

//   changeTable(level,index,navigateBack,cusip){
//     if(this.showFilter)
//        this.showFilter = !this.showFilter;
//     let a ={};
//     if(cusip)
//       a['cusip'] = cusip;
//     a['navigateBack'] =navigateBack; 
//     a['level'] = level;
//     a['index'] = index;
//     this.sendLevel.emit(a);  
// }
}
