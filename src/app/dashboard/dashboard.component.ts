import { Component, OnInit } from '@angular/core';
import { faHome, faPlus, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestService } from '../services/service-rest.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardCreateComponent } from './create/dashboard-create.component';
import { DashboardEditComponent } from './edit/dashboard-edit.component';
import { DashboardDeleteComponent } from './delete/dashboard-delete.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faHome = faHome;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;

  constructor(private modalService: NgbModal, private service: ServiceRestService, private http: HttpClient) { }

  add() {
    const modalRef = this.modalService.open(DashboardCreateComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  edit() {
    this.modalService.open(DashboardEditComponent, { size: 'lg' });
  }

  delete() {
    this.modalService.open(DashboardDeleteComponent, { size: 'lg' });
  }

  ngOnInit() {
    this.inItData();
  }

  inItData() {
    return this.service.getServices().subscribe((res) => {
      console.log(res);
    });

  }

}
