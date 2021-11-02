import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoviddataService } from 'src/app/services/coviddata.service';

interface ITotalCases {
  name: string;
  numbers: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  totalCases: ITotalCases[];
  constructor( private _dataService: CoviddataService) { }

  ngOnInit(): void {
    this._dataService.getStateData().subscribe(
      response => {
        const cases: ITotalCases[] = [
          {
            name: "Coronavirus Cases",
            numbers: response[0].confirmed
          },
          {
            name: "Active Cases",
            numbers: response[0].active
          },
          {
            name: "Recovered",
            numbers: response[0].recovered
          },
          {
            name: "Deathes",
            numbers: response[0].deaths
          },
        ]
        this.totalCases = cases;
        console.log(this.totalCases);
        // console.log(response)
      }
    )
  }

}
