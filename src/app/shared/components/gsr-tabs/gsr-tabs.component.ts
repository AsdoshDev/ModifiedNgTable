import { Component, OnInit, Input, Output } from '@angular/core';
import { TableDataService } from './../../../services/table-data.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'gsr-tabs',
  templateUrl: './gsr-tabs.component.html',
  styleUrls: ['./gsr-tabs.component.css']
})
export class GsrTabsComponent implements OnInit {

  @Input() tabs;
  @Input() tabNavigationBtns;
  @Output() passTabIndex = new EventEmitter();


  constructor(private data: TableDataService) { }

  navigateTab(nextTab) {
    let activeTab = this.tabs.filter(function (tab) {
      return tab.isClicked == "active";
    });
    let index = nextTab ? this.tabs.indexOf(activeTab[0]) + 1 : this.tabs.indexOf(activeTab[0]) - 1;
    let targetTab = this.tabs[index];
    if (targetTab)
      this.selectTab(targetTab, index);
  }
  ngAfterContentChecked(){
    
  }

  ngOnInit() {
    this.tabs.forEach(tab => tab.isClicked = "");
    this.selectTab(this.tabs[0]);
  }

  ngAfterViewInit() {
  }

  selectTab(tab, index?) {
    debugger;
    if (tab.isClicked !== "active" || !index) {
      this.tabs.forEach(tab => tab.isClicked = "");
      tab.isClicked = "active";
      tab.index = index;
      //pass Tab index to change content based on clicked tab
      this.passTabIndex.emit(tab);
    }
  }

}


