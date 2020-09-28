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
  api_url = 'https://swapi.dev/api/';
  peoples = [];

  constructor(private http: HttpClient) {}

  getCategories() {
    let http = HttpClient;

    let categories = [];

    this.http.get(this.api_url).toPromise().then(data => {
      for (let property in data) {
        let category = {
          name: "",
          url: ""
        }
        if (data.hasOwnProperty(property)) {
          category.name = property;
          category.url = data[property];
          categories.push(category);
        }
      }
    })

    return categories;
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

  getFilms() {
    let http = HttpClient;
    let url = this.api_url + 'films/';
    let films_counts = 0;
    let films = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          films_counts = data[property];
        }
      }

      for (let index = 1; index <= films_counts; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_film = {};
          add_film['id'] = index;
          add_film['desc'] = data;
          films.push(add_film);
        },
        error => {})
      }
    })

    return films;
  }

  getSpecies() {
    let http = HttpClient;
    let url = this.api_url + 'species/';
    let species_counts = 0;
    let species = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          species_counts = data[property];
        }
      }

      for (let index = 1; index <= species_counts; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_specie = {};
          add_specie['id'] = index;
          add_specie['desc'] = data;
          species.push(add_specie);
        },
        error => {})
      }
    })

    return species;
  }

  getVehicles() {
    let http = HttpClient;
    let url = this.api_url + 'vehicles/';
    let vehicles_counts = 0;
    let vehicles_pages = 0;
    let vehicles = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          vehicles_counts = data[property];
        }
      }

      for (let index = 1; index <= vehicles_counts; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_vehicle = {};
          add_vehicle['id'] = index;
          add_vehicle['desc'] = data;
          vehicles.push(add_vehicle);
        },
        error => {})
      }
    })

    return vehicles;
  }

  getStarships() {
    let http = HttpClient;
    let url = this.api_url + 'starships/';
    let starships_counts = 0;
    let starships_pages = 0;
    let starships = [];

    this.http.get(url).toPromise().then(data => {
      for (let property in data) {
        if (property == 'count') {
          starships_counts = data[property];
        }
      }

      for (let index = 1; index <= starships_counts; index++) {
        this.http.get(url+""+index).toPromise().then(data => {
          let add_starship = {};
          add_starship['id'] = index;
          add_starship['desc'] = data;
          starships.push(add_starship);
        },
        error => {})
      }
    })

    return starships;
  }
}