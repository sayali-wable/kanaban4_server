import { Injectable } from '@angular/core';
import { Post } from './app.post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  getPosts() {}
  addPostService(
    title: string,
    content: string,
    username: string,
    priority: boolean,
    date: Date
  ) {
    const post: Post = {
      title: title,
      content: content,
      username: username,
      priority: priority,
      date: date,
    };
    this.posts.push(post);

    console.log('************', post);
  }
  constructor() {}
}
