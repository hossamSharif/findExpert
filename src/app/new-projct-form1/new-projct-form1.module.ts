import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProjctForm1PageRoutingModule } from './new-projct-form1-routing.module';

import { NewProjctForm1Page } from './new-projct-form1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProjctForm1PageRoutingModule
  ],
  declarations: [NewProjctForm1Page]
})
export class NewProjctForm1PageModule {}
