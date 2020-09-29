import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  search_value = this.route.snapshot.paramMap.get('search_value');
  search = this.swapi.search(this.search_value);

  ngOnInit(): void {
    console.log(this.search);
  }

}
