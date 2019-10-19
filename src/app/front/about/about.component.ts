import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private body = document.getElementsByTagName('nav')[0];
  constructor() { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

}
