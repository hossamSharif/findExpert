import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificatiosPage } from './notificatios.page';

const routes: Routes = [
  {
    path: '',
    component: NotificatiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificatiosPageRoutingModule {}
