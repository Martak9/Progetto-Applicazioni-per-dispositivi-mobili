import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeseCondivisePageRoutingModule } from './spese-condivise-routing.module';

import { SpeseCondivisePage } from './spese-condivise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeseCondivisePageRoutingModule
  ],
  declarations: [SpeseCondivisePage]
})
export class SpeseCondivisePageModule {}
