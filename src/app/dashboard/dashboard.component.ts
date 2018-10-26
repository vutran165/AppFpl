import { Component, OnInit } from '@angular/core';
import { faHome, faPlus, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  test(): any {
    return  1;
  }

  ngOnInit() {
    this.test();
  }

}
