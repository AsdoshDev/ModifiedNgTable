import { Component, OnInit,Input,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'gsr-row',
  templateUrl: './gsr-row.component.html',
  styleUrls: ['./gsr-row.component.css']
})
export class GsrRowComponent implements OnInit {
  constructor(private data:TableDataService) { }
  account:any;
  @Input() record;
  @Input() columnHeaderInfo; //array of objects
  @Input() columnHeaders; 

  public showModal = false;
  chi:any;
  
  @Output() sendLevel = new EventEmitter();

  ngOnInit() {
 
   
  }

  changeTable(level,index,navigateBack,cusip){
    
    // if(this.showFilter)
    //    this.showFilter = !this.showFilter;
    let levelInfo ={};
    if(cusip)
    levelInfo['cusip'] = cusip;
    levelInfo['navigateBack'] =navigateBack; 
    levelInfo['level'] = level;
    levelInfo['index'] = index;

    this.sendLevel.emit(levelInfo);  
}
  openModal() {
    //opwenModal will receive an argument based on which, 
    // we would know the service that needs to be hit.
    // currently hardoded to one service 
    this.showModal = !this.showModal;
    this.account = this.data.getAccount();
    this.chi = this.data.getTableInfo5();

    // let template = "<div>Dynamic data to be inserted here</div>";
    
    // var win = window.open("", "Global Stock Records", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
    // win.document.body.innerHTML = template;
    // win.document.title = "Global Stock Records";
  }

  onCloseHandled() {
    this.showModal = !this.showModal;
  }
  

  
}
