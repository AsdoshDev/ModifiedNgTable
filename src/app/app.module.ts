import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {TableDataService} from './services/table-data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { GsrRowComponent } from './components/gsr-row/gsr-row.component';
import { ColumnHeaderComponent } from './components/column-header/column-header.component';
import { GsrTableComponent } from './components/gsr-table/gsr-table.component';
import { GsrTabsComponent } from './components/gsr-tabs/gsr-tabs.component';
import { GsrTableLevelDeciderComponent } from './components/gsr-table-level-decider/gsr-table-level-decider.component';
import { GsrTableHeaderComponent } from './components/gsr-table-header/gsr-table-header.component';
import { DummyComponent } from './dummy/dummy.component';
import { GsrIconComponent } from './components/gsr-icon/gsr-icon.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    GsrRowComponent,
    ColumnHeaderComponent,
    GsrTableComponent,
    GsrTabsComponent,
    GsrTableLevelDeciderComponent,
    GsrTableHeaderComponent,
    DummyComponent,
    GsrIconComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
],
  providers: [TableDataService,GsrTableComponent,GsrTabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
