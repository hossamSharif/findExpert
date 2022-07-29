import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProjctForm3Page } from './new-projct-form3.page';

const routes: Routes = [
  {
    path: '',
    component: NewProjctForm3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProjctForm3PageRoutingModule {}
