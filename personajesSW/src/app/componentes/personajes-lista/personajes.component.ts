import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/interfaces/personajes-response.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  lista: Films[] = [];

  constructor(private personajesServices: PersonajesService) { }

  ngOnInit(): void {

    this.personajesServices.personajeList().subscribe((response) => {

      this.lista = response.results;

    });

  }

}
