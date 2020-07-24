import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  rowData;

  ngOnInit(): void {
   /*  this.http.get('http://localhost:3000/garagem').subscribe(
      res => {
        let data = [];
        this.rowData = res;
      },
      error => console.log(error)
    ); */
    this.rowData = this.http.get('http://localhost:3000/garagem');
  }

  columnDefs = [
    { headerName: 'Marca', field: 'marca', sortable: true, filter: true },
    { headerName: 'Modelo', field: 'modelo', sortable: true, filter: true },
    { headerName: 'Cor', field: 'cor', sortable: true, filter: true },
    { headerName: 'Tração', field: 'tracao', sortable: true, filter: true },
    { headerName: 'Roubado ?', field: 'roubado', sortable: true, filter: true },
    { headerName: 'Horse Power', field: 'hp', sortable: true, filter: true },
    { headerName: 'Nitro', field: 'nitro', sortable: true, filter: true }
  ];


  /* rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ]; */


}
