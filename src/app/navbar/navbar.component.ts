import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  decideMenu: boolean;
  showMenu: boolean;
  menuToggle: boolean;
  currentRoute: String;
  constructor(private _router: Router) {
    this.decideMenu = false;
    this.showMenu = false;
    this.menuToggle = false;
  }

  toggleCollapse(): void {
    this.menuToggle = !this.menuToggle;
  }

  ngOnInit(): void {
    // Collapse Navbar
    // const navbarCollapse = function () {
    //   if ($('#mainNav').offset().top > 100) {
    //     $('#mainNav').addClass('navbar-shrink');
    //   } else {
    //     $('#mainNav').removeClass('navbar-shrink');
    //   }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // $('#mainNav').addClass('navbar-shrink');
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);

    $('#mainNav').addClass('navbar-shrink');

    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuToggle = false;
        this.currentRoute = this._router.url;
        if (this._router.url === '/decide' || this._router.url === '/vote' || this._router.url === '/compare'
        || this._router.url === '/comment') {
          this.decideMenu = true;
          this.showMenu = true;
        } else {
          this.decideMenu = false;
          this.showMenu = false;
        }
      }
    });
  }

}
