import { GaragemRoutingModule } from './garagem-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaComponent, AddComponent],
  imports: [
    CommonModule,
    GaragemRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GaragemModule { }
