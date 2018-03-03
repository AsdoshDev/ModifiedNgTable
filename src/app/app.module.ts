import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TableDataService} from './services/table-data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';

/* user defined reusable components */
import { GsrModalComponent } from './shared/components/gsr-modal/gsr-modal.component';
import { GsrRowComponent } from './shared/components/table/gsr-row/gsr-row.component';
import { GsrTableComponent } from './shared/components/table/gsr-table/gsr-table.component';
import { GsrTabsComponent } from './shared/components/gsr-tabs/gsr-tabs.component';
import { GsrTableLevelDeciderComponent } from './shared/components/table/gsr-table-level-decider/gsr-table-level-decider.component';
import { GsrTableHeaderComponent } from './shared/components/table/gsr-table-header/gsr-table-header.component';
import { GsrIconComponent } from './shared/components/gsr-icon/gsr-icon.component';
import { Utils } from './shared/utils';
import { GsrButtonComponent } from './shared/components/gsr-button/gsr-button.component';
import { GsrColumnHeaderComponent } from './shared/components/table/gsr-column-header/gsr-column-header.component';
/* user defined reusable components */


/* module components in app*/
import { CgmiPositionsComponent } from './modules/cgmi-positions/cgmi-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    GsrModalComponent,
    GsrRowComponent,
    GsrColumnHeaderComponent,
    GsrTableComponent,
    GsrTabsComponent,
    GsrTableLevelDeciderComponent,
    GsrTableHeaderComponent,
    GsrIconComponent,
    GsrButtonComponent,
    CgmiPositionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
],
  providers: [TableDataService,Utils,GsrTabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
