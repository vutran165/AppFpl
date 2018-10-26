import { Component, OnInit } from '@angular/core';
import {
  faWrench, faPenSquare, faPlus, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ServiceRestService } from './service-rest.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const endpoint = 'https://samples.openweathermap.org/data/2.5';
const url = 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22';
const _URL = 'https://fantasy.premierleague.com/drf/bootstrap-static';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, UPDATE',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Authorization'
  }),
  withCredentials: true
};

const responseType = 'json';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {



  constructor(private modalService: NgbModal, private service: ServiceRestService, private http: HttpClient) { }

  faWrench = faWrench;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;


  private alldata: Observable<any>;

  add() {
    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  edit() {
    this.modalService.open(EditComponent, { size: 'lg' });
  }

  delete() {
    this.modalService.open(DeleteComponent, { size: 'lg' });
  }

  ngOnInit() {
    console.log('done');
    this.inItData();
  }

  inItData() {
    return this.service.getServices().subscribe((res) => {
      console.log(res);
    });

  }

}
