import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  planet_id = parseInt(this.route.snapshot.paramMap.get('id'));
  planet = this.swapi.getPlanet(this.planet_id, false);

  ngOnInit(): void {
  }

}
