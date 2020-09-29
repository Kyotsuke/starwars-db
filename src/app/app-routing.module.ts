import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CategoryComponent } from './category/category.component';

import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'people', component: CategoryComponent},
  {path: 'planets', component: CategoryComponent},
  {path: 'films', component: CategoryComponent},
  {path: 'species', component: CategoryComponent},
  {path: 'vehicles', component: CategoryComponent},
  {path: 'starships', component: CategoryComponent},

  {path: 'people/:id', component: PeopleComponent},
  {path: 'planets/:id', component: PlanetComponent},
  {path: 'films/:id', component: FilmComponent},
  {path: 'species/:id', component: SpecieComponent},
  {path: 'vehicles/:id', component: VehicleComponent},
  {path: 'starships/:id', component: StarshipComponent},

  {path: 'search/:search_value', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
