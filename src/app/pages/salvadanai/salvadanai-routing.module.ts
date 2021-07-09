import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvadanaiPage } from './salvadanai.page';

const routes: Routes = [
  {
    path: '',
    component: SalvadanaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvadanaiPageRoutingModule {}
