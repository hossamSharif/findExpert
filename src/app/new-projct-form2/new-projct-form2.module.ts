import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProjctForm2PageRoutingModule } from './new-projct-form2-routing.module';

import { NewProjctForm2Page } from './new-projct-form2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProjctForm2PageRoutingModule
  ],
  declarations: [NewProjctForm2Page]
})
export class NewProjctForm2PageModule {}
