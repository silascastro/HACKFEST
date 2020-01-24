import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // { path: '', redirectTo: 'visualization', pathMatch: 'prefix'},
    { path: '', redirectTo: 'creator', pathMatch: 'prefix'},
    { path: 'creator', loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidosRoutingModule { }
