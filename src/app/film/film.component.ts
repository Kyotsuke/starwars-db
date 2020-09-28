import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  film_id = parseInt(this.route.snapshot.paramMap.get('id'));
  film = this.swapi.getFilm(this.film_id, false);

  ngOnInit(): void {
  }

}
