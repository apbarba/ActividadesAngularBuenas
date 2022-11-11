import { Component, OnInit } from '@angular/core';
import { Gasoi, Gasolina, Gasolinera, GasResponse, Hidrogeno } from 'src/app/interfaces/gas.interfaces';
import { GasService } from 'src/app/services/gas.service';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {
[x: string]: any;

gasolineraList : Gasolinera[]=[];
precioGasList: Gasoi[] = [];
precioGasolinaList: Gasolina[] = [];
precioHidogrenoList: Hidrogeno[] = [];

  constructor(private gasServices: GasService) { }

  ngOnInit(): void {
    this.getListadoGas();
  }

  getListadoGas(){

    this.gasServices.getGasolinera().subscribe((resp) => {
        this.gasolineraList=resp.ListaEESSPrecio;
    })
  }

  getFiltrarPorPrecioGasoi(gasoi: Gasoi){

   // if(gasoi == 'Gasolina'){


  }

  getFiltrarPorPrecioGasolina(gasolina: Gasolina){


  }

  getFiltrarPorPrecioHidrogeno(hidrogeno: Hidrogeno){


  }

}
