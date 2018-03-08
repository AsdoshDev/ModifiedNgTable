import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { NgSwitch } from  '@angular/common';
@Component({
  selector: 'gsr-icon',
  templateUrl: './gsr-icon.component.html',
  styleUrls: ['./gsr-icon.component.css']
})
export class GsrIconComponent implements OnInit {
  @Input() type;
  @Input() showContent;


  
  constructor() { }

  ngOnInit() {
  }

}
