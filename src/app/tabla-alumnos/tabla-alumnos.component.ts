import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  nota: number;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Cecilia', apellido: 'Arias', nota: 6, curso: 'Angular'},
  {nombre: 'Tomas', apellido: 'Bollo', nota: 6, curso: 'Angular'},
  {nombre: 'Javier', apellido: 'Martinez', nota: 6, curso: 'React'},
  {nombre: 'Martin', apellido: 'Castro', nota: 6, curso: 'Vue'},
  {nombre: 'Lucia', apellido: 'Benito', nota: 6, curso: 'Angular'},
  {nombre: 'Carla', apellido: 'Garro', nota: 6, curso: 'Vue'},
  {nombre: 'Agustin', apellido: 'Cruzat', nota: 6, curso: 'Angular'},
  {nombre: 'Leandro', apellido: 'Perez', nota: 6, curso: 'React'},
  {nombre: 'Isabel', apellido: 'Luna', nota: 6, curso: 'React'},
  {nombre: 'Cecilia', apellido: 'Rocha', nota: 6, curso: 'Vue'},
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss']
})
export class TablaAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'curso', 'nota'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
