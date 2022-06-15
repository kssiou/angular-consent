import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './Cookiesbar/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ListComponent } from './List/Liste_clients.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ClientComponent } from './client/client.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ParametreEditComponent } from './parametre-edit/parametre-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'Cookiesbar', pathMatch: 'full'},
  {path: 'Cookiesbar', component: DashboardComponent},
  {path: 'List', component: ListComponent},
  {path: 'settings/privacy', component: StatisticsComponent},
  {path: 'settings/cdt', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'settings', component: SettingsComponent},
  {path:'client', component:ClientComponent},
  {path:'List', component:ListComponent},
  {path:'choix', component:ClientEditComponent},
  {path:'editchoix', component:ParametreEditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ClientComponent]