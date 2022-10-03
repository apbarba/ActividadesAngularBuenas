import { Component, OnInit } from '@angular/core';
import { alumnado } from './alumnado';


@Component({
  selector: 'app-lista-profe',
  templateUrl: './lista-profe.component.html',
  styleUrls: ['./lista-profe.component.css']
})
export class ListaProfeComponent implements OnInit {

  constructor() { }

  alumnos: alumnado[] = [

    {nombre: 'Ana', apellidos: 'Barba', edad: 18, sexo: 'F'},
    {nombre: 'Lola', apellidos: 'Iglesias', edad: 18, sexo: 'F'},
    {nombre: 'Blanca', apellidos: 'Pérez', edad: 18, sexo: 'F'},
    {nombre: 'Lucía', apellidos: 'Ibañez', edad: 18, sexo: 'F'},
    {nombre: 'Mario', apellidos: 'López', edad: 18, sexo: 'M'},
    {nombre: 'Gonzalo', apellidos: 'García', edad: 18, sexo: 'M'},
    {nombre: 'Francisco', apellidos: 'Fernandez', edad: 18, sexo: 'M'}

]; 
  ngOnInit(): void {
  }

}
