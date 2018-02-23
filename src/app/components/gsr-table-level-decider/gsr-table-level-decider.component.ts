import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'gsr-table-level-decider',
  templateUrl: './gsr-table-level-decider.component.html',
  styleUrls: ['./gsr-table-level-decider.component.css']
})
export class GsrTableLevelDeciderComponent implements OnInit {
  @Input() showFilter;
  @Input() dataObj;
  @Input() columnHeaderInfo; //array of objects
  @Output() sendLevel = new EventEmitter();
    
  recIndex:any;
  tableLevel : any;
  records:any;
  columns:any;

  constructor() { }

  ngOnInit() {
    this.columns = this.columnHeaderInfo['columnHeaders'];
    this.recIndex = this.columnHeaderInfo['index'];
    this.tableLevel = this.columnHeaderInfo['level'];
    if(this.columnHeaderInfo.levelDecider){
    if(this.tableLevel == 1)
      this.records = this.dataObj.details;
   else  if(this.tableLevel == 3){
      this.records  = this.dataObj[this.columnHeaderInfo.cusip][this.recIndex]["records"];
   }
     // this.cusipId = this.data.getCusipId();
  }else{
    this.records = this.dataObj;
  }
  }

  changeTable(level,index,navigateBack,cusip){
    debugger;
    if(this.showFilter)
       this.showFilter = !this.showFilter;
    let levelInfo ={};
    if(cusip)
    levelInfo['cusip'] = cusip;
    levelInfo['navigateBack'] =navigateBack; 
    levelInfo['level'] = level;
    levelInfo['index'] = index;

    this.sendLevel.emit(levelInfo);  
}
}
