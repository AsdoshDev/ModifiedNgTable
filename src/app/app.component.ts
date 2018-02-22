import { Component } from '@angular/core';
import { TableDataService } from './services/table-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ChangeDetectorRef,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  icon: string;
  icData:any;
  account: any;
  columnHeaderInfo:any;
  tabs = [
    {title : 'Search'},
    {title : 'Positions by Security'},
    {title : 'Postings'}
  ];
  log(val) { console.log(val); }

  
ngOnInit() {

    // this.data.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    //   this.originalUsers = data;
    // }

    this.columnHeaderInfo = this.data.getLevel3Columns();
    this.icData = this.data.getLevel3();
    this.account = this.data.getAccount();
  }

  constructor(private data: TableDataService,private cd: ChangeDetectorRef) {

  }
}
