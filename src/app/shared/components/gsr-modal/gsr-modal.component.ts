import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'gsr-modal',
  templateUrl: './gsr-modal.component.html',
  styleUrls: ['./gsr-modal.component.css']
})
export class GsrModalComponent implements OnInit {

  constructor() { }
  @Input() showModal:any;
  @Output() closeModal = new EventEmitter();
 
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
    this.closeModal.emit(this.showModal);  
  }


}
