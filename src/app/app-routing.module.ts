import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'work', component: PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
