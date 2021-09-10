import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  isExpanded = false;
  public isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
