import { Component, OnInit, Input } from '@angular/core';
import {POSTS} from '../post/posts';
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
  form: any;

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
      this.citiesService.populateCityPosts(this.city);
      this.author = '';
      this.title = '';
      this.body = '';
      this.form.markAsUntouched().reset();
    }
  }
}
