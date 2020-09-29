import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isOpened: boolean = false;
  search_value = "";

  constructor() { }

  ngOnInit(): void {
  }

  NavStatus(status: boolean) {
    this.isOpened = status;
  }

  getVal(item) {
    this.search_value = item.target.value;
  }

}
