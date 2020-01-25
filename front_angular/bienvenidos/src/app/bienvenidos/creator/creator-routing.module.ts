import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { BasicChatComponent } from './components/basic-chat/basic-chat.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';

const routes: Routes = [
    { path: '', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: BasicChatComponent },
    { path: 'ViewRequests', component: ViewRequestsComponent },
    { path: 'componente3', component: BasicChatComponent },
    { path: 'componente4', component: BasicChatComponent },
    { path: 'componente5', component: BasicChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
