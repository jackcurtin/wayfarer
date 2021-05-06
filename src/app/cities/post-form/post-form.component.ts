import { Component, OnInit, Input } from '@angular/core';
import {POSTS} from '../city-listing/posts';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  author: string;
  title: string;
  body: string;
  id: number = POSTS.length;
  @Input() cityId: number;
  date: string = this.datepipe.transform(Date.now()).toString();

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  createPost(test): void{
    console.log(this.date);
    POSTS.push(
      {
        id: this.id,
        title: test,
        body: test,
        date: this.date,
        cityId: this.cityId,
        author: test,
      }
      );
    console.log(POSTS);
  }
}
