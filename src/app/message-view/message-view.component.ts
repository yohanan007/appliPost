import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {

posts: any[];
date = new Date();

  constructor( private postService: PostService ) {}

  ngOnInit() {
	  this.posts = this.postService.posts; 
  }

}
