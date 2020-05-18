import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private body = document.getElementsByTagName('nav')[0];
  public posts: any[];
  public errorMsg;
  public successMsg;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
    this.postService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        this.errorMsg = error.statusText;
      }
    );
  }

}
