import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'entusiastnerd';

  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    $('.js-scroll').on('click',  () => {
      /*($('.navbar-collapse') as any).collapse('hide');*/
      this.show = !this.show;
    });
    $('.navbar-toggler').on('click', () => {
      if(!$('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
      }
    });
  }
}
