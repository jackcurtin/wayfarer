import { Component, OnInit, Input } from '@angular/core';
import {POSTS} from '../city-listing/posts';
import {DatePipe} from '@angular/common';
import {CitiesService} from '../cities.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  author: string;
  title: string;
  body: string;
  id: number = POSTS.length + 1;
  @Input() city: any;
  date: string = this.datepipe.transform(Date.now()).toString();

  constructor(private datepipe: DatePipe, private citiesService: CitiesService) { }

  ngOnInit(): void {
  }

  createPost(authorInput, titleInput, bodyInput): void {
    if (!this.author || !this.title || !this.body){
      console.log('Inputs empty - nothing sent.');
    } else {
      POSTS.push(
        {
          id: this.id,
          title: titleInput,
          body: bodyInput,
          date: this.date,
          cityId: this.city.id,
          author: authorInput
        }
      );
      this.author = '';
      this.title = '';
      this.body = '';
    }
  }
}
