import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../models/blog';
import {ICategory} from '../../models/category';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  private body = document.getElementsByTagName('nav')[0];
  public post: IBlog = new IBlog();
  public categories: Observable<ICategory[]>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
    this.categories = this.postService.getCategories();
  }

}
