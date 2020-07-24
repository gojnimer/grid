import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
    {path:'',component:ListaComponent},
    {path:'new',component:AddComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaragemRoutingModule { }
