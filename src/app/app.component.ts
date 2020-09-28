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
  api_url = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

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

  specieData(specie, data, name: boolean) {
    for (const key in data) {

    // FETCH RESIDENTS DATA
      if (key === "people" && name === false) {
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
}