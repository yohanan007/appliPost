import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import du service post/new-post
import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';

import { Routes, RouterModule } from '@angular/router';
import { MessageViewComponent } from './message-view/message-view.component';

const appRoutes: Routes = [
  { path: 'message', component: MessageViewComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: MessageViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewPostComponent,
    MessageViewComponent
  ],
  imports: [
    BrowserModule, 
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
  PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
