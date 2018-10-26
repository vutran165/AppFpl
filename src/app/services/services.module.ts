import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestService } from './service-rest.service';


@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [NgbActiveModal, ServiceRestService],
  entryComponents: [CreateComponent, EditComponent, DeleteComponent, DetailComponent],
  declarations: [ServicesComponent, CreateComponent, EditComponent, DeleteComponent, DetailComponent]
})

export class ServicesModule { }
