import {NgModule} from '@angular/core';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CommonModule} from '@angular/common';
import {CategoryRoutingModule} from './category-routing.module';
import {CategoryService} from './category.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ],

  declarations: [
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  providers: [
    CategoryService
  ],
})
export class CategoryModule {

}
