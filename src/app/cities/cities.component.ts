import { Component, OnInit } from '@angular/core';
import { CitiesModule } from './cities.module';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  allCities = ['San Francisco', 'London'];
  constructor() {
  }

  ngOnInit(): void {
  }

}
