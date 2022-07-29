import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificatiosPageRoutingModule } from './notificatios-routing.module';

import { NotificatiosPage } from './notificatios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificatiosPageRoutingModule
  ],
  declarations: [NotificatiosPage]
})
export class NotificatiosPageModule {}
