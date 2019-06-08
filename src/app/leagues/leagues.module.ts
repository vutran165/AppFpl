import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from './leagues.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeaguesRoutingModule } from './leagues-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    LeaguesRoutingModule
  ],
  declarations: [LeaguesComponent]
})
export class LeaguesModule { }
