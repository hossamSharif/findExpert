import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'appointment',
        loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
      },
      {
        path: 'best-price',
        loadChildren: () => import('../best-price/best-price.module').then( m => m.BestPricePageModule)
      },
      {
        path: 'messages',
      loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
