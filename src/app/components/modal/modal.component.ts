import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {GsrTableComponent} from '../gsr-table/gsr-table.component';

@Component({
  selector: 'gsr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private table:GsrTableComponent) { }

  @Input() account:any; 
  @Input() columnHeaderInfo:any; 
  
  @Input() showModal:any;
  @Output() sendValue = new EventEmitter();
 
  ngOnInit() {

  }
    printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    //document.body.innerHTML = originalContents;
  }
 
 

  onCloseHandled(){
    this.showModal = !this.showModal;
    this.sendValue.emit(this.showModal);  
  }


}
