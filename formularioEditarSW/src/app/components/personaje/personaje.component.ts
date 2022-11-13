import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { PeronajeService } from 'src/app/service/people.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  peopleList:  People[] = [];
  numPages = 0;

  constructor(private peopleService: PeronajeService) { }

  ngOnInit(): void {

    this.getPeoplePage(1);


  }

  showImg(people : People){

    let id = people.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

  }

  getPeoplePage(page: number) {
    this.peopleService.getPeople(page).subscribe(resp =>  {
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

}
