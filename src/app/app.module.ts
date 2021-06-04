import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {CountryFilterPipe} from "./search.pipe";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
