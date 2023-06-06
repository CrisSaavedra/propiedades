import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  openNavBar() {    
    let navbar = document.getElementById('nav-bar');
    navbar?.classList.remove('animate-close-navbar');
    navbar?.classList.add('animate-open-navbar');
  }

  closeNavBar(){
    let navbar = document.getElementById('nav-bar');
    navbar?.classList.remove('animate-open-navbar');
    navbar?.classList.add('animate-close-navbar');
  }
}
