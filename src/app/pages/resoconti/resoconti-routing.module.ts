import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResocontiPage } from './resoconti.page';

const routes: Routes = [
  {
    path: '',
    component: ResocontiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResocontiPageRoutingModule {}
