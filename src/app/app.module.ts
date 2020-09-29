import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StarshipComponent } from './starship/starship.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PeopleComponent,
    PlanetComponent,
    FilmComponent,
    SpecieComponent,
    VehicleComponent,
    StarshipComponent,
    CategoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
