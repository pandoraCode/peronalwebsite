import {NgModule} from '@angular/core';
import {PostListComponent} from './post-list/post-list.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './post-routing.module';
import {FormsModule} from '@angular/forms';
import {PostService} from './post.service';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ],
  declarations: [
    PostListComponent,
    PostAddComponent,
    PostEditComponent
  ],
  providers: [PostService]
})
export class PostModule {

}
