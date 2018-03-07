import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gsr-table-pagination',
  templateUrl: './gsr-table-pagination.component.html',
  styleUrls: ['./gsr-table-pagination.component.css']
})
export class GsrTablePaginationComponent implements OnInit {


  @Input() totalRecords;
  @Input() recordsPerPage;
  numbers: any;
  pages: any;
  pageObj = [];
  constructor() {


  }

  loadRecords(open, number) {
    let targetPage = this.pageObj.find(obj => obj.isClicked == 'active');
    let targetNumber = targetPage.number;
    if (open == 'first') {
      this.paginationInit();
      return;
    }
    if (open == 'last') {
      this.getLastnRecords();
      return;
    }
    else if (open == 'prev') {
      if ((targetNumber - 1) > 0) {
        this.loadRecords('', targetNumber - 1);
      }
      return;
    }
    else if (open == 'next') {
      if ((targetNumber + 1) < this.pageObj[this.pageObj.length - 1].number) {
        this.loadRecords('', targetNumber + 1);
      }
      return;
    }
    this.pageObj.forEach(obj => obj.isClicked = "");



    if (number >= this.calcMean()) {
      let lastNo = this.pageObj[this.pageObj.length - 1].number;
      let diff = lastNo % number;
      if (diff <= 3) {
        let loopNo = (diff == 3) ? 1 : ((diff == 2) ? 2 : (diff == 1) ? 3 : (diff == 0) ? 4 : '');
        let incrementNo = diff + 1;
        for (let i = 0; i < loopNo; i++) {
          if (this.pages >= number + incrementNo + i)
            this.pageObj.push({ 'number': number + incrementNo + i, isClicked: '' });
          if (this.pageObj.length > this.recordsPerPage)
            this.pageObj.shift();

        }
      }
    }
    else if (number < this.calcMean() - 1) {
      let firstNo = this.pageObj[0].number;
      let diff;
      if (number > firstNo)
        diff = number % firstNo;
      else
        diff = firstNo % number;


      if (diff <= 4) {
        let loopNo = (diff == 0) ? 5 : ((diff == 2) ? 3 : (diff == 4) ? 1 : (diff == 3) ? 2 : diff == 1 ? 4 : '');
        let decrementNo = 1;
        for (let i = 0; i < loopNo; i++) {
          if (firstNo - decrementNo - i > 0)
            this.pageObj.unshift({ 'number': firstNo - decrementNo - i, isClicked: '' });
          if (this.pageObj.length > this.recordsPerPage)
            this.pageObj.pop();
        }
      }
    }

    if (number) {
      let targetObj = this.pageObj.find(obj => obj.number == number);
      targetObj.isClicked = 'active';
    }

  }


  calcMean() {
    var total = 0;
    for (var i = 0; i < this.recordsPerPage; i++) {
      if (this.pageObj[i])
        total += this.pageObj[i].number;
    }
    var avg = total / this.pageObj.length;
    return Math.ceil(avg + 1);
  }

  getLastnRecords() {
    this.pageObj = [];
    this.pages = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.numbers = Array.from(new Array(this.pages), (x, i) => i + 1);
    var ctx = this;
    let tempArr = this.numbers.slice(-(this.recordsPerPage));
    tempArr.map(function (number) {
      ctx.pageObj.push({ 'number': number, isClicked: '' });
    });
    this.pageObj[0].isClicked = 'active';
  }

  paginationInit() {
    this.pageObj = [];
    this.pages = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.numbers = Array.from(new Array(this.pages), (x, i) => i + 1);

    var ctx = this;
    this.numbers.map(function (number) {
      if (number <= ctx.recordsPerPage)
        ctx.pageObj.push({ 'number': number, isClicked: '' });
    });
    this.pageObj[0].isClicked = 'active';
  }

  ngOnInit() {
    this.paginationInit();
  }

}
