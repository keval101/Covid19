import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

  visibleSidebar: boolean;
  constructor() { }

  ngOnInit(): void {
    this.visibleSidebar = true;
  }

  openSidebar(): void {
    this.visibleSidebar = true;
  }

}
