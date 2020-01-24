import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'bienvenidos', pathMatch: 'prefix'},
    { path: 'bienvenidos', loadChildren: () => import('./bienvenidos/bienvenidos.module').then(m => m.BienvenidosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
