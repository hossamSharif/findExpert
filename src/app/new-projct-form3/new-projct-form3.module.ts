import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProjctForm3PageRoutingModule } from './new-projct-form3-routing.module';

import { NewProjctForm3Page } from './new-projct-form3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProjctForm3PageRoutingModule
  ],
  declarations: [NewProjctForm3Page]
})
export class NewProjctForm3PageModule {}
