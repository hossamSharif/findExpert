import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestPricePageRoutingModule } from './best-price-routing.module';

import { BestPricePage } from './best-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestPricePageRoutingModule
  ],
  declarations: [BestPricePage]
})
export class BestPricePageModule {}
