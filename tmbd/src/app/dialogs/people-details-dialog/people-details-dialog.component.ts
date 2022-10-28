import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/people-dialog.interface';

@Component({
  selector: 'app-people-details-dialog',
  templateUrl: './people-details-dialog.component.html',
  styleUrls: ['./people-details-dialog.component.css']
})
export class PeopleDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
