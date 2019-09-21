import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private body = document.getElementsByTagName('nav')[0];
  constructor() { }

  ngOnInit() {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

}
