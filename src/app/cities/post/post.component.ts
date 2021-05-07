import {Component, Input, OnInit} from '@angular/core';
import {CITIES} from '../cities';
import { ActivatedRoute} from '@angular/router';
import {POSTS} from './posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = POSTS.find(post => {
        return post.id === parseInt(params.get('postId'), 10);
      });
    });
  }

}
