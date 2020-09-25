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
}