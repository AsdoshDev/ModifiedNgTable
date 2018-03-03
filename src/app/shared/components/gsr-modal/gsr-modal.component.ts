import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-modal',
  templateUrl: './gsr-modal.component.html',
  styleUrls: ['./gsr-modal.component.css']
})
export class GsrModalComponent implements OnInit {

  constructor() { }

  @Input() account:any; 
  @Input() columnHeaderInfo:any; 
  // @Input() chi:any;
  
  @Input() showModal:any;
  @Output() sendValue = new EventEmitter();
 
  ngOnInit() {}
  printDiv(divName) {
    debugger;

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
 
 

  onCloseHandled(){
    this.showModal = !this.showModal;
    this.sendValue.emit(this.showModal);  
  }


}
