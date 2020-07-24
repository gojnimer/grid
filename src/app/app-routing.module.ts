import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path:"", redirectTo:"garagem", pathMatch:"full" },
    {path:"garagem" , loadChildren: () => import('./garagem/garagem.module').then(m => m.GaragemModule)}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
