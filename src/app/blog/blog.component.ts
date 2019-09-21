import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private body = document.getElementsByTagName('nav')[0];
  constructor() { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

}
