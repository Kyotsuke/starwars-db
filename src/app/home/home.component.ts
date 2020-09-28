import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  swapi = new SWAPI(this.http);
  categories = this.swapi.getCategories();

  ngOnInit(): void {
  }

}
