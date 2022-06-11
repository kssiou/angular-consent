import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './Cookiesbar/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './List/Liste_clients.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'Cookiesbar', pathMatch: 'full'},
  {path: 'Cookiesbar', component: DashboardComponent},
  {path: 'Liste_clients', component: ProductsComponent},
  {path: 'settings/privacy', component: StatisticsComponent},
  {path: 'settings/cdt', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
