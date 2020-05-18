import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private body = document.getElementsByTagName('nav')[0];
  public posts: any[];
  public errorMsg;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
    this.postService.getPosts()
      .subscribe(data => this.posts = data, error => this.errorMsg = error);
  }






}
