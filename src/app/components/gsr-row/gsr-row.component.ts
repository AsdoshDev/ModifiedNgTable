import { Component, OnInit,Input,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'gsr-row',
  templateUrl: './gsr-row.component.html',
  styleUrls: ['./gsr-row.component.css']
})
export class GsrRowComponent implements OnInit {
  constructor(private data:TableDataService) {

    //this.toggleAccordionFn = this.toggleAccordion.bind(this);

   }
  account:any;
  toggleAccordionFn:Function;
  @Input() record;
  @Input() columnHeaderInfo; //array of objects
  @Input() columnHeaders; 
  @Input() isAccordion:boolean;
  @Input() isSubRow:boolean;

  public showModal = false;
  chi:any;
  
  @Output() sendLevel = new EventEmitter();

 

   ngOnInit(){
    
    if(this.isAccordion){
      let obj = {'attrName':'accordion',accordion : true}
      this.columnHeaders.unshift(obj);
    }
   }
 //ngDoCheck(){


containsAccordion(list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].attrName == 'accordion') {
            return true;
        }
    }

    return false;
}
  ngAfterContentInit(){
    let obj = {'attrName':'accordion',accordion : true,'isExpanded' : 'true'};
    while(this.containsAccordion(this.columnHeaders)){
      this.columnHeaders.shift(obj);
    }
    
    if(this.isAccordion){
      let obj = {'attrName':'accordion',accordion : true}
      this.columnHeaders.unshift(obj);
    }
     else{
        let obj1 = {'attrName':'accordion',accordion : true,'isExpanded' : ''};
        this.columnHeaders.unshift(obj1);
      }

    // debugger;
    // let obj = {'attrName':'accordion',accordion : true,'isExpanded' : 'true'};
    // if(this.containsAccordion(this.columnHeaders)){
    //   this.columnHeaders.shift(obj);
    // }
    
    // if(this.isAccordion){
    //   this.columnHeaders.unshift(obj);
    // }
    // else{
    //     let obj1 = {'attrName':'accordion',accordion : true,'isExpanded' : ''};
    //     this.columnHeaders.unshift(obj1);
    //   }
  }

  changeValues(column,record){
   // (column.isExpanded !== "") ? (column.isExpanded == 'true') ? column.isExpanded = 'false' : column.isExpanded = 'true' :'';
    //this.toggleAccordion(column,record);
  }

   public toggleAccordion(record){
     if(this.columnHeaderInfo.tableType == "levelDecider" && this.columnHeaderInfo.level == 1){
       
     }
    if(this.isAccordion && record.subRecords && record.subRecords.length > 0){
      record.showRow =  (record.showRow == undefined) ? true : !record.showRow;
      record.subRecords.forEach(record => (record.showRow == undefined) ? record.showRow = true : record.showRow = !record.showRow);
    }
  }

  changeTable(level,index,navigateBack,cusip){
    debugger;
    // if(this.isAccordion){
    //   this.toggleAccordion();
    // }
    // else{
      let levelInfo ={};
      if(cusip)
      levelInfo['cusip'] = cusip;
      levelInfo['navigateBack'] =navigateBack; 
      levelInfo['level'] = level;
      levelInfo['index'] = index;
  
      this.sendLevel.emit(levelInfo);  
  //  }
    // if(this.showFilter)
    //    this.showFilter = !this.showFilter;
    
}
  openModal() {
    //opwenModal will receive an argument based on which, 
    // we would know the service that needs to be hit.
    // currently hardoded to one service 
   this.account = this.data.getAccount();
    this.chi = this.data.getTableInfo5();
     this.showModal = !this.showModal;
    

    // let template = "<div>Dynamic data to be inserted here</div>";
    
    // var win = window.open("", "Global Stock Records", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
    // win.document.body.innerHTML = template;
    // win.document.title = "Global Stock Records";
  }

  onCloseHandled() {
    this.showModal = !this.showModal;
  }
  

  
}
