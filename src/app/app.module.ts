import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import {NgForm} from '@angular/forms';



import {CgmiModule} from './modules/cgmi-positions/cgmi.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CgmiModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
