import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardCreateComponent } from './create/dashboard-create.component';
import { DashboardEditComponent } from './edit/dashboard-edit.component';
import { DashboardDeleteComponent } from './delete/dashboard-delete.component';
import { DashboardDetailComponent } from './detail/dashboard-detail.component';

const COMPONENTS = [DashboardCreateComponent, DashboardEditComponent, DashboardDeleteComponent, DashboardDetailComponent];
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  declarations: [DashboardComponent, COMPONENTS],
  entryComponents: [COMPONENTS]
})

export class DashboardModule { }
