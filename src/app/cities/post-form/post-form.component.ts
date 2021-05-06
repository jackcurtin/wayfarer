import { Component, OnInit } from '@angular/core';
import {POSTS} from '../city-listing/posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  author: string;
  title: string;
  body: string;
  id: number = POSTS.length - 1;
  cityId: number;
  date: string = Date.now().toString();

  constructor() { }

  ngOnInit(): void {
  }

}
