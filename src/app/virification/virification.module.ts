import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirificationPageRoutingModule } from './virification-routing.module';

import { VirificationPage } from './virification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirificationPageRoutingModule
  ],
  declarations: [VirificationPage]
})
export class VirificationPageModule {}
