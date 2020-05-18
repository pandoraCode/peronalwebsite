import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';

const routes: Routes = [
  {path: 'admin/post', component: PostListComponent},
  {path: 'admin/post/add', component: PostAddComponent},
  {path: 'admin/post/:id', component: PostEditComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule {

}
