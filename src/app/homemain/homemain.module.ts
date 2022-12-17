import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { HomemainPageRoutingModule } from './homemain-routing.module';

import { HomemainPage } from './homemain.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemainPageRoutingModule,
    SwiperModule
  ],
  declarations: [HomemainPage]
})
export class HomemainPageModule {}
