import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post/post.service';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private body = document.getElementsByTagName('nav')[0];
  public categories: any[];
  public errorMsg;
  public successMsg;
  constructor(private categoryService: CategoryService, private route: Router) { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
    this.categoryService.getCategories()
      .subscribe(data => this.categories = data, error => this.errorMsg = error);
  }

  deleteCategory(id: number, index: number){
    this.categoryService.deleteCategory(id).subscribe(
      data => {
        this.successMsg = data['success'];
        this.categories.splice(index, 1);
      },
      error => {
        this.errorMsg = error.statusText;
      }
    )
  }
}
