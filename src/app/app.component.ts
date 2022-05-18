import { Component } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stockmanagements';
  isSidenavCollapsed=false
  screenwidth=0;
  onToggleSidenav(data:SideNavToggle){
    this.screenwidth=data.screenWidth;
    this.isSidenavCollapsed=data.collapsed
  }
}
