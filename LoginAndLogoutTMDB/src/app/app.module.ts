import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './components/account/account.component';
import { HttpClientModule } from "@angular/common/http";
import { PeopleListComponent } from './components/people-list/people-list.component';
import { MaterialsImportModule } from './material-imports/material-imports.module';
import { PeopleDetailsDialogComponent } from './dialogs/people-details-dialog/people-details-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PeopleListComponent,
    PeopleDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
