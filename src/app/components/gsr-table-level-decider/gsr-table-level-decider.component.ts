import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'gsr-table-level-decider',
  templateUrl: './gsr-table-level-decider.component.html',
  styleUrls: ['./gsr-table-level-decider.component.css']
})
export class GsrTableLevelDeciderComponent implements OnInit {
  @Input() showFilter;
  @Input() dataObj;
  @Input() columnHeaders; 
  @Input() records;
  @Input() columnHeaderInfo; //array of objects
  @Output() sendLevel = new EventEmitter();
  @Output() sendFilter = new EventEmitter();


 
  constructor() { }

  ngOnInit() {
  }

  passLevel(levelDtls){
    this.sendLevel.emit(levelDtls);
  }

  changeTable(level,index,navigateBack,cusip){
    if(this.showFilter){
       this.showFilter = !this.showFilter;
       this.sendFilter.emit(this.showFilter);  
    }
    let levelInfo ={};
    if(cusip)
    levelInfo['cusip'] = cusip;
    levelInfo['navigateBack'] =navigateBack; 
    levelInfo['level'] = level;
    levelInfo['index'] = index;
    
    this.sendLevel.emit(levelInfo);  
}
}
