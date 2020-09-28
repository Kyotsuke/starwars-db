import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router, NavigationEnd } from '@angular/router';

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  swapi = new SWAPI(this.http);
  elements = [];
  category_name = "";

  ngOnInit(): void {

    if (this.router.url === "/people"){
      this.elements = this.swapi.getPeoples();
      this.category_name = "Peoples"
    }

    if (this.router.url === "/planets"){
      this.elements = this.swapi.getPlanets();
      this.category_name = "Planets"
    }

    if (this.router.url === "/films"){
      this.elements = this.swapi.getFilms();
      this.category_name = "Films"
    }

    if (this.router.url === "/species"){
      this.elements = this.swapi.getSpecies();
      this.category_name = "Species"
    }

    if (this.router.url === "/vehicles"){
      this.elements = this.swapi.getVehicles();
      this.category_name = "Vehicles"
    }

    if (this.router.url === "/starships"){
      this.elements = this.swapi.getStarships();
      this.category_name = "Starships"
    }
  }

}
