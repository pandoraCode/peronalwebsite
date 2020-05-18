import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../models/category';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  private body = document.getElementsByTagName('nav')[0];
  private categoryId: number;
  public success: string = '';
  public errorMsg: string = '';
  category: Observable<ICategory>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    /*this.category = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.categoryService.getCategory(+params.get('id')))
    );*/
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
    // tslint:disable-next-line:radix
    this.categoryId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }

  onUpdate(cat) {
    this.categoryService.editCategory(this.categoryId, cat)
      .subscribe(
        data => {
          console.log('success', data);
          this.success = data["success"];
        },
        error => this.errorMsg = error.statusText
      );

  }

}
