import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProjctForm1Page } from './new-projct-form1.page';

const routes: Routes = [
  {
    path: '',
    component: NewProjctForm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProjctForm1PageRoutingModule {}
