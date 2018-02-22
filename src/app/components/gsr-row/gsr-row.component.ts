import { Component, OnInit,Input } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'gsr-row',
  templateUrl: './gsr-row.component.html',
  styleUrls: ['./gsr-row.component.css']
})
export class GsrRowComponent implements OnInit {
  constructor(private data:TableDataService) { }
  account:any;
  @Input() record;
  @Input() columnHeaderInfo; //array of objects
  
  columns:any;
  public showModal = false;

  openModal() {
    this.showModal = !this.showModal;
    this.account = this.data.getAccount();
    this.account.title = "ACCOUNT DETAILS";
  }

  onCloseHandled() {
    this.showModal = !this.showModal;
  }


  ngOnInit() {
    this.columns = this.columnHeaderInfo['columnHeaders'];
  }
}
