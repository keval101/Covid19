import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
