import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvadanaiPageRoutingModule } from './salvadanai-routing.module';

import { SalvadanaiPage } from './salvadanai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvadanaiPageRoutingModule
  ],
  declarations: [SalvadanaiPage]
})
export class SalvadanaiPageModule {}
