import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { News1PageRoutingModule } from './news1-routing.module';

import { News1Page } from './news1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    News1PageRoutingModule
  ],
  declarations: [News1Page]
})
export class News1PageModule {}
