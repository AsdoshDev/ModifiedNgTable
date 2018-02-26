import { Component, OnInit,Input,Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {TableDataService} from './../../services/table-data.service';

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
  cusipId:any;
  constructor(private data: TableDataService) { }


  getLevel(levelDtls){
    this.sendLevel.emit(levelDtls);
  }
  
  ngOnInit() {

    if(this.columnHeaderInfo.tableType !== "columnTable"){
      if(this.columnHeaderInfo.levelDecider){
      if(this.columnHeaderInfo['level'] == 1)
        this.originalRecords = this.dataObj.details;
     else  if(this.columnHeaderInfo['level'] == 3){
        this.originalRecords = this.dataObj[this.columnHeaderInfo.cusip][this.columnHeaderInfo['index']]["records"];
     }
        this.cusipId = this.data.getCusipId();
    }else{
      this.originalRecords = this.dataObj;
    }
    }
    
 }
 generateArray(obj) {
  let bla = Object.keys(obj).map((key) => {return {key: key, value: obj[key]}});
  return bla;
}

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
