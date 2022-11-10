import { Component, OnInit } from '@angular/core';
import { GasResponse } from 'src/app/interfaces/gas.interfaces';
import { GasService } from 'src/app/services/gas.service';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

gasolineraList = 'string'

  constructor(private gasServices: GasService) { }

  ngOnInit(): void {
    this.getListadoGas();
  }

  getListadoGas(){

    this.gasServices.getGasolinera().subscribe((resp) => {

      this.gasolineraList = resp['Precio Gasoleo A']
      this.gasolineraList = resp['Precio Gasoleo B']
      this.gasolineraList = resp['Precio Gasoleo Premium']
      this.gasolineraList = resp['Precio Gasolina 95 E10']
      this.gasolineraList = resp['Precio Gasolina 95 E5']
      this.gasolineraList = resp['Precio Gasolina 95 E5 Premium']
      this.gasolineraList = resp['Precio Gasolina 98 E10']
      this.gasolineraList = resp['Precio Gasolina 98 E5']
      this.gasolineraList = resp['Precio Hidrogeno']
    })
  }

}
