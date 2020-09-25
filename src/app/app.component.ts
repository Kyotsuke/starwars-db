import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'starwars-db';
}


export class SWAPI {
  api_url = 'https://swapi.dev/api/'
  categories = [];
  peoples = [];

  constructor(private http: HttpClient) {}

  getCategories() {
    let http = HttpClient;
    this.http.get(this.api_url).toPromise().then(data => {
      for (let property in data) {
        let category = {
          name: "",
          url: ""
        }
        if (data.hasOwnProperty(property)) {
          category.name = property;
          category.url = data[property];
          this.categories.push(category);
        }
      }
    })

    return this.categories;
  }

  getPeoples() {
    let http = HttpClient;
    let url = this.api_url + 'people/';
    let peoples_count = 0;
    let peoples = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          peoples_count = data[property];
        }
      }

      for (let index = 1; index <= peoples_count; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_people = {};
          add_people['id'] = index;
          add_people['desc'] = data;
          peoples.push(add_people);
        },
        error => {})
      }
    })

    return peoples;
  }

  getPlanets() {
    let http = HttpClient;
    let url = this.api_url + 'planets/';
    let planets_counts = 0;
    let planets = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          planets_counts = data[property];
        }
      }

      for (let index = 1; index <= planets_counts; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_planet = {};
          add_planet['id'] = index;
          add_planet['desc'] = data;
          planets.push(add_planet);
        },
        error => {})
      }
    })

    return planets;
  }
}