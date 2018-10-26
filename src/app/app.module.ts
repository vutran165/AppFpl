import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const APP_COMPONENT = [
  AppComponent,
  MenuAdminComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    APP_COMPONENT
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    NgbDropdownModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
