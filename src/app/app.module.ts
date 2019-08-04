import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { AddRowComponent } from './add-row/add-row.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button'
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes =[
  {path: '', component: ViewTableComponent},
  {path:'add', component: AddRowComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewTableComponent,
    AddRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AccordionModule, 
    DropdownModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
