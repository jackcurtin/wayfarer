import {Component, Input, OnInit} from '@angular/core';
import {CitiesComponent} from '../cities.component';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CITIES} from '../cities';

@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.css']
})
export class CityListingComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
