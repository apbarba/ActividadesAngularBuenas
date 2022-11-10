import { Component, OnInit } from '@angular/core';
import { Gasolinera, GasResponse } from 'src/app/interfaces/gas.interfaces';
import { GasService } from 'src/app/services/gas.service';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

gasolineraList : Gasolinera[]=[];

  constructor(private gasServices: GasService) { }

  ngOnInit(): void {
    this.getListadoGas();
  }

  getListadoGas(){

    this.gasServices.getGasolinera().subscribe((resp) => {
        this.gasolineraList=resp.ListaEESSPrecio;
    })
  }

}
