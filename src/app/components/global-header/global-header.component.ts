import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoviddataService } from 'src/app/services/coviddata.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalHeaderComponent implements OnInit {
  statesName = [];
  stateArray = [];
  results = [];
  isSearching: boolean;
  constructor(private _covidDataService: CoviddataService) {  }

  ngOnInit(): void {
    this.getStateName();
    console.log('hello header')
    this.isSearching = false;
  }

  getStateName(): void {
    this._covidDataService.getStateData().subscribe(
      response => {
        // this.statesName.push(response.statewise.state);
        this.stateArray = response;
        for (let i = 1; i <= this.stateArray.length - 1 ; i++) {
          this.statesName.push({state: this.stateArray[i].state});
        }
      })
  }

  onKeyUp(event): void {
    this.isSearching = true;
    const keywords = event.target.value.toLowerCase();
    if (keywords.length === 0) {
      this.isSearching = false;
    }

    this.results = this.statesName.filter(value => value.state.toLowerCase().includes(keywords));
  }

}
