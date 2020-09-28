import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  starship_id = parseInt(this.route.snapshot.paramMap.get('id'));
  starship = this.swapi.getStarship(this.starship_id, false);

  ngOnInit(): void {
    console.log(this.starship);
  }

}
