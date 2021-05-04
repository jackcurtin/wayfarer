import { Component, OnInit } from '@angular/core';
import { CITIES} from './cities';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  allCities = CITIES;
  city: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        // tslint:disable-next-line:radix
        return city.id === parseInt(params.get('id'));
      });
    });
  }
}
