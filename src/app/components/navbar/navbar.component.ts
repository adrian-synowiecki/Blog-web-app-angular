import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './hamburger.scss'],
})
export class NavbarComponent implements OnInit {
  isOpenHamburgerMenu = false;
  constructor() {}

  ngOnInit(): void {}

  onToggleHamburgerMenu() {
    this.isOpenHamburgerMenu = !this.isOpenHamburgerMenu;
  }
}
