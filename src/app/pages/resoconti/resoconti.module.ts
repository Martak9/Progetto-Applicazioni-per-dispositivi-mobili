import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResocontiPageRoutingModule } from './resoconti-routing.module';

import { ResocontiPage } from './resoconti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResocontiPageRoutingModule
  ],
  declarations: [ResocontiPage]
})
export class ResocontiPageModule {}
