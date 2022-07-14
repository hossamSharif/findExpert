import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestPricePage } from './best-price.page';

const routes: Routes = [
  {
    path: '',
    component: BestPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestPricePageRoutingModule {}
