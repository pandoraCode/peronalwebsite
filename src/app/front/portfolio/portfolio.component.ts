import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private body = document.getElementsByTagName('nav')[0];
  constructor() { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

}
