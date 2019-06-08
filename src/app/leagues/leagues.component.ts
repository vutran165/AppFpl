import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { faTrash, faPenSquare, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: any[] = [];

  faHome = faHome;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;

  constructor(private modalService: NgbModal, private service: CommonService, private http: HttpClient) { }

  ngOnInit() {
    this.inItData();
  }

  inItData() {
    return this.service.getData('leagues').subscribe(res => {
      console.log(res);
      this.leagues = res.data;
    });
  }
}
