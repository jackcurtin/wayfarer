import {Component, Input, OnInit} from '@angular/core';
import {CitiesComponent} from '../cities.component';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CITIES} from '../cities';
import {POSTS} from './posts';

@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.css']
})
export class CityListingComponent implements OnInit {
  // @Input() id: number;
  // @Input() name: string;
  allCities = CITIES;
  city: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        console.log(city.posts);
        return city.id === parseInt(params.get('cityId'), 10);
      });
    });
  }
}
