import { Component, OnInit } from '@angular/core';
import {CitiesComponent} from '../cities.component';
import {CitiesService} from '../../services/cities/cities.service';

@Component({
  selector: 'app-san-fran',
  templateUrl: './san-fran.component.html',
  styleUrls: ['./san-fran.component.css']
})
export class SanFranComponent extends CitiesComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = 1;
    this.name = 'San Francisco';
    this.country = 'United States';
  }

}
