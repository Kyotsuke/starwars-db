import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  people_id = parseInt(this.route.snapshot.paramMap.get('id'));
  people = this.swapi.getPeople(this.people_id);
  films = [];
  vehicles = [];
  starships = []

  ngOnInit(): void {
  }

}
