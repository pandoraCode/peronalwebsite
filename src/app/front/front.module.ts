import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {CommonModule} from '@angular/common';
import {FrontRoutingModule} from './front-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailComponent,
  ],
  providers: [

  ]
})
export class FrontModule {

}
