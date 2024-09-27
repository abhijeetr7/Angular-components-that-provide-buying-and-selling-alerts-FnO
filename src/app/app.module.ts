import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { SettingsComponent } from './settings/settings.component';
import { SampleParentComponent } from './sample-parent/sample-parent.component';


const routes: Routes = [

];

@NgModule({
  declarations: [
    //Import Required Angular Components
    AppComponent,
    AlertComponent,
    SettingsComponent,
    SampleParentComponent,
  ],
  imports: [
    //Import Required Angular Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    // ToastrModule.forRoot({

//       positionClass: 'toast-center-center', // Use custom position class
//       preventDuplicates: true,
//       closeButton: true,
//       timeOut: 2000,
//       maxOpened: 2,
// }),
  ],
  providers: [
    //Import Required Services
    // MasterServices,
    // TransactionServices,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
