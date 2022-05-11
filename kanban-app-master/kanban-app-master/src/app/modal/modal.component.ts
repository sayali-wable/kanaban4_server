import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title = '';
  content = '';
  username = '';
  priority = '';
  date = '';

  constructor(public postService: PostService) {}
  addPost(form: NgForm) {
    this.postService.addPostService(
      form.value.title,
      form.value.content,
      form.value.username,
      form.value.priority,
      form.value.date
    );
  }

  ngOnInit(): void {}
}
