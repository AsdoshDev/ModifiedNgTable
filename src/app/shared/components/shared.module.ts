
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


/* user defined reusable components */
import { GsrModalComponent } from '../../shared/components/gsr-modal/gsr-modal.component';
import { GsrRowComponent } from '../../shared/components/table/gsr-row/gsr-row.component';
import { GsrTableComponent } from '../../shared/components/table/gsr-table/gsr-table.component';
import { GsrTabsComponent } from '../../shared/components/gsr-tabs/gsr-tabs.component';
import { GsrTableLevelDeciderComponent } from '../../shared/components/table/gsr-table-level-decider/gsr-table-level-decider.component';
import { GsrTableHeaderComponent } from '../../shared/components/table/gsr-table-header/gsr-table-header.component';
import { GsrIconComponent } from '../../shared/components/gsr-icon/gsr-icon.component';
import { Utils } from '../../shared/utils';
import { GsrButtonComponent } from '../../shared/components/gsr-button/gsr-button.component';
import { GsrColumnHeaderComponent } from '../../shared/components/table/gsr-column-header/gsr-column-header.component';
import { GsrTablePaginationComponent } from '../../shared/components/table/gsr-table-pagination/gsr-table-pagination.component';

/* user defined reusable components */



@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [
         GsrModalComponent,
        GsrRowComponent,
        GsrColumnHeaderComponent,
        GsrTableComponent,
        GsrTabsComponent,
        GsrTableLevelDeciderComponent,
        GsrTableHeaderComponent,
        GsrIconComponent,
        GsrButtonComponent,
        GsrTablePaginationComponent,
    ],
    providers: [Utils,GsrTabsComponent],
    exports :[ GsrModalComponent,
        GsrRowComponent,
        GsrColumnHeaderComponent,
        GsrTableComponent,
        GsrTabsComponent,
        GsrTableLevelDeciderComponent,
        GsrTableHeaderComponent,
        GsrIconComponent,
        GsrButtonComponent,
        GsrTablePaginationComponent]

})

export class SharedComponentsModule { }

