import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera.interface';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})


export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput!: Gasolinera;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
