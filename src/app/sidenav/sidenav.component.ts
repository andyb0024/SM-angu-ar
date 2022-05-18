import { Component, OnInit } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  collapsed=false;
  newData=[
    {
      routelink:'dashboard',
      icon:'fal fa-home',
      label:'Dashboard'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapse():void{
    this.collapsed = !this.collapsed;

  }
  closeSidenav():void{
    this.collapsed = false

  }

}
