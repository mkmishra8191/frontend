import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmsserviceService } from './emsservice.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { ManagerComponent } from './components/manager/manager.component';








@NgModule({
  declarations: [
    AppComponent,
    
    routingComponents,
         ApplyLeaveComponent,
         ManagerComponent,
         
         
         
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],

providers: [EmsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
