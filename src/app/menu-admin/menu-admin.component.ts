import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faAlignJustify, faUser, faClipboard, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent implements OnInit {

  isActive: boolean = false;
  pushRightClass: string = 'push-right';

  faAlignJustify = faAlignJustify;
  faUser = faUser;
  faClipboard = faClipboard;
  faCog = faCog;
  faEnvelope = faEnvelope;
  faSignOutAlt = faSignOutAlt;

  constructor(public router: Router) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 &&
        this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    // const dom: any = document.getElementsByClassName('sidebar');
    dom.classList.toggle(this.pushRightClass);
  }

}
