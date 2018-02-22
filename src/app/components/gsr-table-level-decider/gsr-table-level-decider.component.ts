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
  @Output() sendLevel2 = new EventEmitter();
    
  recIndex:any;
  tableLevel : any;
  records:any;
  columns:any;

  constructor() { }

  ngOnInit() {
    this.recIndex = this.columnHeaderInfo['index'];
    this.tableLevel = this.columnHeaderInfo['level'];
    if(this.tableLevel == 1)
    if(this.tableLevel == 1)
    this.records = this.dataObj.details;
    else  if(this.tableLevel == 3)
    this.records  = this.dataObj.companies[this.recIndex]["records"];
  }

changeTable(level,index){
    if(this.showFilter)
       this.showFilter = !this.showFilter;
    let a ={};
    a['level'] = level;
    a['index'] = index;
    this.sendLevel2.emit(a);  
}

}
