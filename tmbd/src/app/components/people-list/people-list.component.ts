import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDetailsDialogComponent } from 'src/app/dialogs/people-details-dialog/people-details-dialog.component';
import { PeopleDetailsResponse } from 'src/app/interfaces/people-details.interfaces';
import { People, PeopleResponse } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];
  peopleSelected: PeopleDetailsResponse | undefined;

  constructor(private peopleService: PeopleService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getPeoplePage();
  }

  getPeoplePage(){

    this.peopleService.getPeople().subscribe((resp) => {

      this.peopleList = resp.results;

    });
  }

  getLookImg(people: People){

    let id = people.id;

    return `https://image.tmdb.org/t/p/w500/${people.profile_path}`;
  }

  getPeopleDetails(people: People){

    this.peopleService.getPeopleDetails(people).subscribe(resp => {

      this.peopleSelected = resp;
      this.dialog.open(PeopleDetailsDialogComponent, {

        data: {

          peopleInfo: this.peopleSelected,
        },

      });

    });
  }

}
