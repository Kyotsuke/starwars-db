import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  NavStatus(status: boolean) {
    this.isOpened = status;
  }

}
