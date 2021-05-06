import { Component, OnInit, Input } from '@angular/core';
import {POSTS} from '../city-listing/posts';
import {DatePipe} from '@angular/common';
import {CITIES} from '../cities';
import {element} from 'protractor';

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
  @Input() cityId: number;
  date: string = this.datepipe.transform(Date.now()).toString();

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  createPost(authorInput, titleInput, bodyInput): void {
    if (!titleInput || titleInput.length > 200 ) {
      console.log('invalid length');
    } else if (!bodyInput){
      console.log('must write something in body');
    } else{
      POSTS.push(
        {
          id: this.id,
          title: titleInput,
          body: bodyInput,
          date: this.date,
          cityId: this.cityId,
          author: authorInput,
        }
      );
    }
  }
}
