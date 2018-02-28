import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gsr-icon',
  templateUrl: './gsr-icon.component.html',
  styleUrls: ['./gsr-icon.component.css']
})
export class GsrIconComponent implements OnInit {
  @Input() type;
  @Input() showContent;
  @Input() callback:Function;
  constructor() { }

  ngOnInit() {
  }

}
