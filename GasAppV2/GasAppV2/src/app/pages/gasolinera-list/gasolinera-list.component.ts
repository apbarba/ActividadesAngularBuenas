
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera.interface';
import { Provincia } from 'src/app/models/interfaces/provincia.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { ProvinciaService } from 'src/app/services/provincia.service';


@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {
  gasolineras: Gasolinera[] = [];
  gasolinerasPorPrecio: Gasolinera[] = [];
  provincias: Provincia[] = [];
  gasolinerasFiltradas: Gasolinera[] = [];
  provinciasFormControl = new FormControl([]);
  precioFormControl = new FormControl('');
  value!: number;
  constructor(private gasolineraService: GasolineraService, private provinciaService: ProvinciaService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(g => {
      let jsonString = JSON.stringify(g);
      let jsonString1 = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
      let jsonString2 = jsonString1.replace(/Dirección/gi, 'direccion');
      let jsonString3 = jsonString2.replace(/Localidad/gi, 'localidad');
      let jsonString4 = jsonString3.replace(/Precio Gasoleo B/gi, 'precioGasoleoB');
      let jsonString5 = jsonString4.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
      let jsonString6 = jsonString5.replace(/Rótulo/gi, 'rotulo');
      let jsonString7 = jsonString6.replace(/Horario/gi, 'horario');
      let jsonString8 = jsonString7.replace(/IDEESS/gi, 'ideess');
      let jsonString9 = jsonString8.replace(/Provincia/gi, 'provincia');
      let jsonString10 = jsonString9.replace(/C\.P\./gi, 'codigoPostal');
      let jsonString11 = jsonString10.replace(/Municipio/gi, 'municipio');
      let jsonFinal = JSON.parse(jsonString11);
      this.gasolineras = jsonFinal.ListaEESSPrecio;
      this.provinciaService.getAllProvincias().subscribe(p => {
        this.provincias = p;
      });
      this.gasolinerasFiltradas = this.gasolineras;
    });
  }

  filtrarProvincia() {
    let provinciaSelected = this.provinciasFormControl.value;
    console.log(provinciaSelected)
    this.gasolinerasFiltradas = this.gasolineras.filter(g => provinciaSelected.includes(g.provincia));
    if (this.gasolinerasFiltradas.length == 0) {
      this.gasolinerasFiltradas = this.gasolineras;
      this.snackBar.open('No hay ninguna gasolinera en la provincia seleccionada', 'Aceptar', { duration: 2500 });
    }
  }
  filtrarPorPrecio(){
    this.gasolinerasFiltradas = this.gasolineras.filter(g => parseFloat(g.precioGasoleoA.replace(",", ".")) <= this.value);
    if(this.gasolinerasFiltradas.length == 0){
      this.gasolinerasFiltradas=this.gasolineras;
      this.snackBar.open('No hay ninguna gasolinera con el precio del gasoleo tan bajo', 'Aceptar', { duration:2500 });
    }
  }
}
