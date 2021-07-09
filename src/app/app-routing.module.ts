import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'salvadanai',
    loadChildren: () => import('./pages/salvadanai/salvadanai.module').then( m => m.SalvadanaiPageModule)
  },
  {
    path: 'mappa',
    loadChildren: () => import('./pages/mappa/mappa.module').then( m => m.MappaPageModule)
  },
  {
    path: 'impostazioni',
    loadChildren: () => import('./pages/impostazioni/impostazioni.module').then( m => m.ImpostazioniPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'spese-condivise',
    loadChildren: () => import('./pages/spese-condivise/spese-condivise.module').then( m => m.SpeseCondivisePageModule)
  },
  {
    path: 'resoconti',
    loadChildren: () => import('./pages/resoconti/resoconti.module').then( m => m.ResocontiPageModule)
  },

  ]
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
