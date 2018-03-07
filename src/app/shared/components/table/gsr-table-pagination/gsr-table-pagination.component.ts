import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gsr-table-pagination',
  templateUrl: './gsr-table-pagination.component.html',
  styleUrls: ['./gsr-table-pagination.component.css']
})
export class GsrTablePaginationComponent implements OnInit {


  @Input() totalRecords;
  @Input() recordsPerPage;
  numbers:any;
  pages:any;
  pageObj = [];
  constructor() {

    
   }

  loadRecords(open,number){
    debugger;
    let targetObj = this.pageObj.findIndex(obj => obj.isClicked == 'active');
      if(open == 'prev'){
        if((targetObj) > 0){
          this.loadRecords('',targetObj);       
          return;
        
        }
          return;
        }
      else if(open == 'next'){
        if((targetObj + 2) < this.pageObj.length){
          this.loadRecords('',targetObj + 2);
          return;
        }
        return;
      }
    this.pageObj.forEach(obj => obj.isClicked = "");
    if(number){
      let targetObj = this.pageObj.find(obj => obj.number == number);
      targetObj.isClicked = 'active';
    }
}

  ngOnInit() {
    this.pages = Math.ceil(this.totalRecords/this.recordsPerPage);
    this.numbers =  Array.from(new Array(this.pages), (x,i) =>i+1);
    var ctx = this;
    this.numbers.map(function(number){
      ctx.pageObj.push({'number': number,isClicked:''});
    });
    this.pageObj[0].isClicked = 'active';
  }

}
