import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import Typed from 'typed.js/src/typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() { }
  private body = document.getElementsByTagName('nav')[0];
  ngOnInit() {
    this.body.classList.remove('navbar-reduce');
    this.body.classList.add('navbar-trans');

    $(document).ready( () => {
      if ($('.text-slider').length === 1) {
        const textSlider = $('.text-slider-items').text();
        const typed = new Typed('.text-slider', {
          strings: textSlider.split(','),
          typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.body.classList.remove('navbar-trans');
    this.body.classList.add('navbar-reduce');
  }

}
