import { Component, Input,  OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	
	@Input() blogMessage : string ;
	@Input() blogContent : string;
	@Input() blogLove : number;
	@Input() blogIndex : number;
	@Input() index : number; 

/*	
	@Input() blogCreated : Date;
	[blogCreated]="obj.created_at"*/
		posts: any[];
		
  constructor( private postService: PostService) { }

  ngOnInit() {
	  
	/*  this.posts = this.postService.posts;*/

}			// fonction se rapportant à la classe
			getColor(){
								return "list-group-item-success";
					}
					
					
						
	love(){
		console.log(this.index);
		this.postService.likeMore(this.index);
	}
	
	hate(){
		console.log(this.index);
		this.postService.likeLess(this.index);
	}
	
	suppr(i){
		this.postService.removeElement(i);
	}
}