import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';

const routes: Routes = [
  {path: 'admin/category', component: CategoryListComponent},
  {path: 'admin/category/add', component: CategoryAddComponent},
  {path: 'admin/category/:id', component: CategoryEditComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule {

}
