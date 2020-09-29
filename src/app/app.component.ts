import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Enable HttpClient to make HTTP request from our API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'starwars-db';
}

// 
// MAKE LINK WITH SWAPI AND ALL HIS FUNCTIONS
//
export class SWAPI {
  api_url = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  // Return all the categories in SWAPI
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
  
  // Return all the peoples in the PEOPLE category of SWAPI
  getPeoples() {
    let http = HttpClient;
    let url = this.api_url + 'people/';
    
    let people_per_pages = 0;
    let pages_count = 0;
    // let peoples_count = 0;
    
    let peoples = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     peoples_count = data[property];
      //   }
      // }

      // for (let index = 1; index <= peoples_count; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_people = {};
      //     add_people['id'] = index;
      //     add_people['desc'] = data;
      //     peoples.push(add_people);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          people_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / people_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_people = {};

                let element = data[property][j];
                add_people['desc'] = element;
                add_people['id'] = element['url'].match(/\d+/)[0];

                peoples.push(add_people);
              }
            }          
          }
        },
        error => {})
      }
      
    })
    
    return peoples;
  }

  // Return all the planets in the PLANETS category of SWAPI
  getPlanets() {
    let http = HttpClient;
    let url = this.api_url + 'planets/';
    
    let planets_per_pages = 0;
    let pages_count = 0;
    // let planets_counts = 0;

    let planets = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     planets_counts = data[property];
      //   }
      // }

      // for (let index = 1; index <= planets_counts; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_planet = {};
      //     add_planet['id'] = index;
      //     add_planet['desc'] = data;
      //     planets.push(add_planet);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          planets_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / planets_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_planet = {};

                let element = data[property][j];
                add_planet['desc'] = element;
                add_planet['id'] = element['url'].match(/\d+/)[0];

                planets.push(add_planet);
              }
            }          
          }
        },
        error => {})
      }
    })

    return planets;
  }

  // Return all the films in the FILMS category of SWAPI
  getFilms() {
    let http = HttpClient;
    let url = this.api_url + 'films/';
    
    let films_per_pages = 0;
    let pages_count = 0;
    // let films_counts = 0;

    let films = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     films_counts = data[property];
      //   }
      // }

      // for (let index = 1; index <= films_counts; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_film = {};
      //     add_film['id'] = index;
      //     add_film['desc'] = data;
      //     films.push(add_film);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          films_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / films_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_film = {};

                let element = data[property][j];
                add_film['desc'] = element;
                add_film['id'] = element['url'].match(/\d+/)[0];

                films.push(add_film);
              }
            }          
          }
        },
        error => {})
      }
    })

    return films;
  }

  // Return all the species in the SPECIES category of SWAPI
  getSpecies() {
    let http = HttpClient;
    let url = this.api_url + 'species/';
    
    let species_per_pages = 0;
    let pages_count = 0;
    // let species_counts = 0;

    let species = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     species_counts = data[property];
      //   }
      // }

      // for (let index = 1; index <= species_counts; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_specie = {};
      //     add_specie['id'] = index;
      //     add_specie['desc'] = data;
      //     species.push(add_specie);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          species_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / species_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_specie = {};

                let element = data[property][j];
                add_specie['desc'] = element;
                add_specie['id'] = element['url'].match(/\d+/)[0];

                species.push(add_specie);
              }
            }          
          }
        },
        error => {})
      }
    })

    return species;
  }

  // Return all the vehicles in the VEHICLES category of SWAPI
  getVehicles() {
    let http = HttpClient;
    let url = this.api_url + 'vehicles/';
    
    let vehicles_per_pages = 0;
    let pages_count = 0;
    // let vehicles_counts = 0;

    let vehicles = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     vehicles_counts = data[property];
      //   }
      // }

      // for (let index = 1; index <= vehicles_counts; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_vehicle = {};
      //     add_vehicle['id'] = index;
      //     add_vehicle['desc'] = data;
      //     vehicles.push(add_vehicle);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          vehicles_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / vehicles_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_vehicle = {};

                let element = data[property][j];
                add_vehicle['desc'] = element;
                add_vehicle['id'] = element['url'].match(/\d+/)[0];

                vehicles.push(add_vehicle);
              }
            }          
          }
        },
        error => {})
      }
    })

    return vehicles;
  }

  // Return all the starships in the STARSHIPS category of SWAPI
  getStarships() {
    let http = HttpClient;
    let url = this.api_url + 'starships/';
    
    let starships_per_pages = 0;
    let pages_count = 0;

    let starships = [];

    this.http.get(url).toPromise().then(data => {
      // for (let property in data) {
      //   if (property == 'count') {
      //     starships_counts = data[property];
      //   }
      // }

      // for (let index = 1; index <= starships_counts; index++) {
      //   this.http.get(url+""+index).toPromise().then(data => {
      //     let add_starship = {};
      //     add_starship['id'] = index;
      //     add_starship['desc'] = data;
      //     starships.push(add_starship);
      //   },
      //   error => {})
      // }
      
      for (let property in data) {
        if (property == 'results') {
          starships_per_pages = data[property].length;
        }
      }
    
      for (let property in data) {
        if (property == 'count') {
          pages_count = Math.ceil(data[property] / starships_per_pages);
        }
      }

      for (let index = 1; index <= pages_count; index++) {
        this.http.get(url+"?page="+index).toPromise().then(data => {
          for (let property in data){
            if (property == 'results') {
              for (let j = 0; j < data[property].length; j++) {
                let add_starship = {};

                let element = data[property][j];
                add_starship['desc'] = element;
                add_starship['id'] = element['url'].match(/\d+/)[0];

                starships.push(add_starship);
              }
            }          
          }
        },
        error => {})
      }
    })

    return starships;
  }

  
  // Return the People we want with the selected ID
  // id: to know wich People we want / name : if we only want name and id (true) or everything (false)
  //
  getPeople(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'people/'+id;

    let people = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.peopleData(people, data, name);
      })
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => { 
        this.peopleData(people, data, name);
      })
    }
    
    return people;
  }

  // 
  // All the elements we want to GET for getPeople()
  //
  peopleData(people, data, name: boolean) {
    for (const key in data) {

      // FETCH HOMEWORLD DATA
        if (key === "homeworld" && name === false) {
          people[key] = this.getPlanet(data[key], true);

      // FETCH FILMS DATA
        } else if (key === "films" && name === false) {
          if(data[key].length != 0){
            let films = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let film = this.getFilm(element, true);
              
              films.push(film); 
            }

            people[key] = films;
        } else {
          people[key] = 'unknow';
        }

      // FETCH SPECIES DATA
        } else if (key === "species" && name === false) {
          if(data[key].length != 0){
            let species = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let specie = this.getSpecie(element, true);
              
              species.push(specie); 
            }

            people[key] = species;
          } else {
            people[key] = 'unknow';
          }

      // FETCH VEHICLES DATA
        } else if (key === "vehicles" && name === false) {
          if(data[key].length != 0){
            let vehicles = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let vehicle = this.getVehicle(element, true);
              
              vehicles.push(vehicle); 
            }

            people[key] = vehicles;
        } else {
          people[key] = 'unknow';
        }

      //FETCH STARSHIPS DATA
        }  else if (key === "starships" && name === false) {
          if(data[key].length != 0){
            let starships = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let starship = this.getStarship(element, true);
              
              starships.push(starship); 
            }

            people[key] = starships;
          } else {
            people[key] = 'unknow';
          }
        } else if (key === "name" && name === true){
          people[key] = data[key];
        } else if (key === "url" && name === true){
          people[key] = data[key];
        } else if (name === false){
          people[key] = data[key];
        }
      }
      
      people['id'] = people['url'].match(/\d+/)[0];
  }
  
  // Return the Planet we want with the selected ID
  // id: to know wich Planet we want / name : if we only want name and id (true) or everything (false)
  //
  getPlanet(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'planets/'+id;

    let planet = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.planetData(planet, data, name);
      })      
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => {
        this.planetData(planet, data, name);
      }) 
    }
    
    return planet;
  }

  // 
  // All the elements we want to GET for getPlanet()
  //
  planetData(planet, data, name: boolean) {
    for (const key in data) {

    // FETCH RESIDENTS DATA
      if (key === "residents" && name === false) {
        if(data[key].length != 0){
          let residents = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let resident = this.getPeople(element, true);
            
            residents.push(resident); 
          }

          planet[key] = residents;
        } else {
          planet[key] = 'unknow';
        }
    // FETCH FILMS DATA
      } else if (key === "films" && name === false) {
        if(data[key].length != 0){
          let films = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let film = this.getFilm(element, true);
            
            films.push(film); 
          }

          planet[key] = films;
        } else {
          planet[key] = 'unknow';
        }
      } else if (key === "name" && name === true){
        planet[key] = data[key];
      } else if (key === "url" && name === true){
        planet[key] = data[key];
      } else if (name === false){
        planet[key] = data[key];
      }
    }

      planet['id'] = planet['url'].match(/\d+/)[0];
  }
  
  // Return the Film we want with the selected ID
  // id: to know wich Film we want / name : if we only want title and id (true) or everything (false)
  //
  getFilm(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'films/'+id;

    let film = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.filmData(film, data, name);
      })      
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => {
        this.filmData(film, data, name);
      })
    }
    
    return film;
  }

  // 
  // All the elements we want to GET for getFilm()
  //
  filmData(film, data, name: boolean) {
    for (const key in data) {
      // FETCH CHARACTERS DATA
        if (key === "characters" && name === false) {
          if(data[key].length != 0){
            let characters = [];
  
            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let character = this.getPeople(element, true);
              
              characters.push(character);
            }
  
            film[key] = characters;
          } else {
            film[key] = 'unknow';
          }

      // FETCH PLANETS DATA
        } else if (key === "planets" && name === false) {
          if(data[key].length != 0){
            let planets = [];
  
            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let planet = this.getPlanet(element, true);
              
              planets.push(planet);
            }
  
            film[key] = planets;
          } else {
            film[key] = 'unknow';
          }

      // FETCH SPECIES DATA
        } else if (key === "species" && name === false) {
          if(data[key].length != 0){
            let species = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let specie = this.getSpecie(element, true);
              
              species.push(specie); 
            }

            film[key] = species;
          } else {
            film[key] = 'unknow';
          }

      // FETCH VEHICLES DATA
        } else if (key === "vehicles" && name === false) {
          if(data[key].length != 0){
            let vehicles = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let vehicle = this.getVehicle(element, true);
              
              vehicles.push(vehicle); 
            }

            film[key] = vehicles;
        } else {
          film[key] = 'unknow';
        }

      //FETCH STARSHIPS DATA
        }  else if (key === "starships" && name === false) {
          if(data[key].length != 0){
            let starships = [];

            for (let index = 0; index < data[key].length; index++) {
              const element = data[key][index];
              let starship = this.getStarship(element, true);
              
              starships.push(starship); 
            }

            film[key] = starships;
          } else {
            film[key] = 'unknow';
          }
        
        } else if (key === "title" && name === true){
          film[key] = data[key];
        } else if (key === "url" && name === true){
          film[key] = data[key];
        } else if (name === false){
          film[key] = data[key];
        }
      }
      
      film['id'] = film['url'].match(/\d+/)[0];
  }
  
  // Return the Specie we want with the selected ID
  // id: to know wich Specie we want / name : if we only want name and id (true) or everything (false)
  //
  getSpecie(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'species/'+id;

    let specie = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.specieData(specie, data, name);
      })      
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => {
        this.specieData(specie, data, name);
      })
    }
    
    return specie;
  }

  // 
  // All the elements we want to GET for getSpecie()
  //
  specieData(specie, data, name: boolean) {
    for (const key in data) {
    // FETCH HOMEWORLD DATA
      
    if (key === "homeworld" && name === false) {
      if(data[key] != null) {
        specie[key] = this.getPlanet(data[key], true);
      } else {
        specie[key] = "unknow";
      }

    // FETCH PEOPLE DATA
      } else if (key === "people" && name === false) {
        if(data[key].length != 0){
          let peoples = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let people = this.getPeople(element, true);
            
            peoples.push(people); 
          }

          specie[key] = peoples;
        } else {
          specie[key] = 'unknow';
        }
    // FETCH FILMS DATA
      } else if (key === "films" && name === false) {
        if(data[key].length != 0){
          let films = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let film = this.getFilm(element, true);
            
            films.push(film);
          }

          specie[key] = films;
        } else {
          specie[key] = 'unknow';
        }
      
      } else if (key === "name" && name === true){
        specie[key] = data[key];
      } else if (key === "url" && name === true){
        specie[key] = data[key];
      } else if (name === false){
        specie[key] = data[key];
      }
    }

      specie['id'] = specie['url'].match(/\d+/)[0];
  }
  
  // Return the Vehicle we want with the selected ID
  // id: to know wich Vehicle we want / name : if we only want name and id (true) or everything (false)
  //
  getVehicle(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'vehicles/'+id;

    let vehicle = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.vehicleData(vehicle, data, name);
      })      
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => {
        this.vehicleData(vehicle, data, name);
      })
    }
    
    return vehicle;
  }

  // 
  // All the elements we want to GET for getVehicle()
  //
  vehicleData(vehicle, data, name: boolean) {
    for (const key in data) {

    // FETCH RESIDENTS DATA
      if (key === "pilots" && name === false) {
        if(data[key].length != 0){
          let pilots = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let pilot = this.getPeople(element, true);
            
            pilots.push(pilot);
          }

          vehicle[key] = pilots;
        } else {
          vehicle[key] = 'unknow';
        }
    // FETCH FILMS DATA
      } else if (key === "films" && name === false) {
        if(data[key].length != 0){
          let films = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let film = this.getFilm(element, true);
            
            films.push(film); 
          }

          vehicle[key] = films;
        } else {
          vehicle[key] = 'unknow';
        }
      
      } else if (key === "name" && name === true){
        vehicle[key] = data[key];
      } else if (key === "url" && name === true){
        vehicle[key] = data[key];
      } else if (name === false){
        vehicle[key] = data[key];
      }
    }

      vehicle['id'] = vehicle['url'].match(/\d+/)[0];
  }
  
  // Return the Starship we want with the selected ID
  // id: to know wich Starship we want / name : if we only want name and id (true) or everything (false)
  //
  getStarship(id: number | string, name: boolean) {
    let http = HttpClient;
    let url = this.api_url + 'starships/'+id;

    let starship = {};

    if(typeof id === 'number') {
      this.http.get(url).toPromise().then(data => {
        this.starshipData(starship, data, name);
      })      
    } else if (typeof id === "string") {
      this.http.get(id).toPromise().then(data => {
        this.starshipData(starship, data, name);
      })
    }
    
    return starship;
  }

  // 
  // All the elements we want to GET for getStarship()
  //
  starshipData(starship, data, name: boolean) {
    for (const key in data) {

    // FETCH RESIDENTS DATA
      if (key === "pilots" && name === false) {
        if(data[key].length != 0){
          let pilots = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let pilot = this.getPeople(element, true);
            
            pilots.push(pilot); 
          }

          starship[key] = pilots;
        } else {
          starship[key] = 'unknow';
        }
    // FETCH FILMS DATA
      } else if (key === "films" && name === false) {
        if(data[key].length != 0){
          let films = [];

          for (let index = 0; index < data[key].length; index++) {
            const element = data[key][index];
            let film = this.getFilm(element, true);
            
            films.push(film); 
          }

          starship[key] = films;
        } else {
          starship[key] = 'unknow';
        }
      
      } else if (key === "name" && name === true){
        starship[key] = data[key];
      } else if (key === "url" && name === true){
        starship[key] = data[key];
      } else if (name === false){
        starship[key] = data[key];
      }
    }

      starship['id'] = starship['url'].match(/\d+/)[0];
  }

  search(value: string) {
    let http = HttpClient;
    let people_url      = this.api_url + 'people/?search='+value;
    let planets_url     = this.api_url + 'planets/?search='+value;
    let films_url       = this.api_url + 'films/?search='+value;
    let species_url     = this.api_url + 'species/?search='+value;
    let vehicles_url    = this.api_url + 'vehicles/?search='+value;
    let starships_url   = this.api_url + 'starships/?search='+value;

    let search = {};

    this.http.get(people_url).toPromise().then(data => {
      let results = data['results'];
      let people = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        people.push(result);
      }
      search['people'] = people;
    })

    this.http.get(planets_url).toPromise().then(data => {
      let results = data['results'];
      let planets = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        planets.push(result);
      }
      search['planets'] = planets;
    })

    this.http.get(films_url).toPromise().then(data => {
      let results = data['results'];
      let films = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        films.push(result);
      }
      search['films'] = films;
    })

    this.http.get(species_url).toPromise().then(data => {
      let results = data['results'];
      let species = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        species.push(result);
      }
      search['species'] = species;
    })

    this.http.get(vehicles_url).toPromise().then(data => {
      let results = data['results'];
      let vehicles = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        vehicles.push(result);
      }
      search['vehicles'] = vehicles;
    })

    this.http.get(starships_url).toPromise().then(data => {
      let results = data['results'];
      let starships = [];
      for (const key in results) {
        let result = results[key];
        result['id'] = result['url'].match(/\d+/)[0];
        starships.push(result);
      }
      search['starships'] = starships;
    })

    return search;

  }
}