import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage {
  posts: string[] = [];
  newPost: string = ''; // Inicializamos newPost

  addPost() {
    if (this.newPost) {
      this.posts.push(this.newPost);
      this.newPost = '';
    }
  }
}
