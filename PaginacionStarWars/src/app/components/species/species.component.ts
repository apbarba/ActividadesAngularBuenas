import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/interfaces/species.interfaces';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  constructor(private speciesServices: SpeciesService) { }

  speciesList: Species[] = [];
  numPages = 0;

  ngOnInit(): void {
    this.getSpeciesPage(1);
  }

  getShowImg(specie: Species){

    let id = specie.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`

  }



  getSpeciesPage(page: number) {
    this.speciesServices.getSpecies(page).subscribe(resp =>  {
      this.speciesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }
}
