import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'gsr-button',
  template: '<button>{{label}}</button>',
  styleUrls: ['./gsr-button.component.css']
})
export class GsrButtonComponent implements OnInit {

  constructor() { }
@Input() label;
  ngOnInit() {
  }

}
