import { Component, OnInit } from '@angular/core';
import { People, PeopleResponse } from 'src/app/interfaces/people.interfaces';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];

  constructor(private peopleService: PeopleService) { }


  ngOnInit(): void {
  }

  getPeoplePage(people: PeopleResponse){

    this.peopleService.getPeople().subscribe((res) => {

      this.peopleList = people.results;

    });
  }

  getLookImg(people: People){

    let id = people.id;

    return `https://api.themoviedb.org/3/person/${id}/images?api_key=api_key=e375f35a8ed2c4c685f14c49cc598088`;
  }

}
