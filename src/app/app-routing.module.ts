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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'Welcome', component: DashboardComponent
},
  {path: 'List', component: ListComponent},
  {path: 'settings/privacy', component: StatisticsComponent},
  {path: 'Information', component: CoupensComponent},
  {path: 'Paramétrages', component: PagesComponent},
  {path: 'settings', component: SettingsComponent},
  {path:'client', component:ClientComponent},
  {path:'List', component:ListComponent,canActivate:[AuthGuard]},
  {path:'choix', component:ClientEditComponent},
  {path:'editchoix', component:ParametreEditComponent},
  {path:'login', component:LoginComponent},
  {path:'oho', component:BodyComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ClientComponent]