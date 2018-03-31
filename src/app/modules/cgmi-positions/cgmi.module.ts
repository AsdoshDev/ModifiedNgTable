import { CgmiPositionsComponent } from './cgmi-positions.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SharedComponentsModule } from '../../shared/components/shared.module';
import {TableDataService} from '../../services/table-data.service';




/* module components in app*/
import { SearchBySecurityComponent } from './pages/search-by-security/search-by-security.component';
import { AdvSearchComponent } from './components/adv-search/adv-search.component';
import { SearchByAccountComponent } from './pages/search-by-account/search-by-account.component';
import { SearchByLocationComponent } from './pages/search-by-location/search-by-location.component';
import { ViewPostingsComponent } from './pages/view-postings/view-postings.component';
import { DwnldOpenItemsReportComponent } from './pages/dwnld-open-items-report/dwnld-open-items-report.component';




@NgModule({
    imports :[BrowserModule,FormsModule,SharedComponentsModule],
    declarations: [
        CgmiPositionsComponent,
        SearchBySecurityComponent,
        AdvSearchComponent,
        SearchByAccountComponent,
        SearchByLocationComponent,
        ViewPostingsComponent,
        DwnldOpenItemsReportComponent,
    ],
    providers: [TableDataService],

    exports : [ CgmiPositionsComponent,
        SearchBySecurityComponent,
        AdvSearchComponent,
        SearchByAccountComponent,
        SearchByLocationComponent,
        ViewPostingsComponent,
        DwnldOpenItemsReportComponent]

})

export class CgmiModule { }


