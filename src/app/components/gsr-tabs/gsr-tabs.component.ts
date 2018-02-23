import { Component, OnInit,Input, ChangeDetectorRef, NgZone } from '@angular/core';
import {TableDataService} from './../../services/table-data.service';

@Component({
  selector: 'gsr-tabs',
  templateUrl: './gsr-tabs.component.html',
  styleUrls: ['./gsr-tabs.component.css']
})
export class GsrTabsComponent implements OnInit {
//@ViewChild('li') el:ElementRef;
@Input() tabs;
columnHeaderInfo:any;
icData:any;
icData5:any;
account:any;
columnHeaderInfo5:any;
level:number;
constructor(private data: TableDataService, private ngZone: NgZone) { }



ngOnInit() {
  //this.tabs.forEach(tab=> tab.isClicked = "disabled");
  this.tabs[0].isClicked = "active";

  this.columnHeaderInfo = this.data.getLevel3Columns();
  this.icData = this.data.getLevel3();

  this.columnHeaderInfo5 = this.data.getLevel5Columns();
  this.icData5 = this.data.getAccount();
}
ngAfterViewInit() {
  //console.log("this.el.nativeElement.querySelector('li')");
     // console.log(this.el.nativeElement.querySelector('li'));
}
selectTab(tab){
  if(tab.isClicked !== "active"){
  this.tabs.forEach(tab=> tab.isClicked = "");
  tab.isClicked = "active";
  }
}


getLevel(a){
  let levelVar,indexVar;
  if(a.index !== undefined && a.index !== ""){
    indexVar = a.index;
  }
  
  if(a.level !==2){
        levelVar = (a.level !== 1) ? (a.level-1) : (a.level+1);
  }else{
        levelVar = (a.navigateBack) ? (a.level-1) : (a.level+1);
  }
      
  // else
  //     levelVar = 3;
  this.columnHeaderInfo = {columnHeaders: ''};
      if(levelVar == 1){
        this.columnHeaderInfo = this.data.getLevel1Columns();
        this.icData = this.data.getLevel1();
      }
      else if(levelVar == 2){
        this.columnHeaderInfo = this.data.getLevel2Columns();
        this.icData = this.data.getLevel3();
      }
      else if(levelVar == 3){
        this.columnHeaderInfo = this.data.getLevel3Columns();
        this.icData = this.data.getLevel3();
      }
      this.columnHeaderInfo.index = indexVar;
      this.columnHeaderInfo.level = levelVar;
      
      if(a.cusip)
        this.columnHeaderInfo.cusip = a.cusip;

       // this.changeDetectorRef.detectChanges();
        this.ngZone.run(function() {}) ;
        this.level = levelVar;
        var array = this.columnHeaderInfo.columnHeaders;
        this.columnHeaderInfo.columnHeaders = [];
        this.columnHeaderInfo.columnHeaders = array
      

}

}


