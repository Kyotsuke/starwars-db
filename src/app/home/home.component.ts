import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  api_url = 'https://swapi.dev/api/'
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.api_url).toPromise().then(data => {
      console.log(data);

      for (let property in data) {
        let category = {
          name: "",
          url: ""
        }
        if (data.hasOwnProperty(property)) {
          category.name = property;
          category.url = data[property];
          this.items.push(category);
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
