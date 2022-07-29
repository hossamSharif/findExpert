import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProjctForm2Page } from './new-projct-form2.page';

const routes: Routes = [
  {
    path: '',
    component: NewProjctForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProjctForm2PageRoutingModule {}
