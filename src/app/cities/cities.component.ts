import { Component, OnInit } from '@angular/core';
import { CitiesService} from '../services/cities/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  id: number;
  name: string;
  country: string;
  posts = new Array(4);

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.id = 1;
    this.name = 'San Francisco';
    this.country = 'United States';
  }

}
