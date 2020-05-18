import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../models/category';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  private body = document.getElementsByTagName('nav')[0];
  public success: string = '';
  public errorMsg: string = '';
  constructor(private categoryService: CategoryService, private router: Router) { }

  public category: ICategory = new ICategory();
  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

  onAdd(category) {
    this.categoryService.addCategory(category)
      .subscribe(
        data => {
          this.success = data['success'];
          let router = this.router;
          setTimeout(function() {
            router.navigate(['/admin/category']);
          }, 2000);
        },
        error => {
          this.errorMsg = error.statusText;
        }
      );

  }

}
