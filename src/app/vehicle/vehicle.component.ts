import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router/'

import { SWAPI } from '../app.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  swapi = new SWAPI(this.http);
  vehicle_id = parseInt(this.route.snapshot.paramMap.get('id'));
  vehicle = this.swapi.getVehicle(this.vehicle_id, false);

  ngOnInit(): void {
  }

}
