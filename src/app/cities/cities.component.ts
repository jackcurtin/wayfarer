import { Component, OnInit } from '@angular/core';
import { CitiesService} from '../services/cities/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  name: string;
  country: string;
  posts: [];


  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
  }

}
