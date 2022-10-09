import { Component, Input, OnInit } from '@angular/core';
import { Films, Personajes } from '../interfaces/personajes-response.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes-fotos',
  templateUrl: './personajes-fotos.component.html',
  styleUrls: ['./personajes-fotos.component.css']
})
export class PersonajesFotosComponent implements OnInit {

  @Input() fotos!: Personajes;

  listaF: Films[] = [];

  constructor(private persoanjesService: PersonajesService) { }

  ngOnInit(): void {

    this.fotos.films.forEach(buscar => {

      this.persoanjesService.peliculasList(buscar).subscribe((response) => {

       // this.listaF.push(response);

      })

    });
  }

  getImagen(p: Personajes){

    let personajeId = p.url.split('/')[5];

    return `https://starwars-visualguide.com/assets/img/characters/${personajeId}.jpg`;

  }

}
