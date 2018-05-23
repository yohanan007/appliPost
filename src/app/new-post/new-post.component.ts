import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

// component gestion du formulaire d'ajout de post

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})

export class NewPostComponent implements OnInit {
	
	postForm: FormGroup;

  constructor( private formBuilder: FormBuilder, 
				private postService: PostService,
				private router: Router) {}

  ngOnInit() {
	  this.initForm();
  }
  
  initForm(){
	  this.postForm = this.formBuilder.group({
		  titre: '',
		  contenu: ''
	  });
  }
  
  onSubmitForm(){
	  console.log('action');
	  const formValue = this.postForm.value;
	  this.postService.addPost(formValue['titre'], formValue['contenu']);
	  this.router.navigate(['../message']);
  }

}
