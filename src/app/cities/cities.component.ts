import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
