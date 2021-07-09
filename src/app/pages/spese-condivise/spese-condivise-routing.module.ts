import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeseCondivisePage } from './spese-condivise.page';

const routes: Routes = [
  {
    path: '',
    component: SpeseCondivisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeseCondivisePageRoutingModule {}
