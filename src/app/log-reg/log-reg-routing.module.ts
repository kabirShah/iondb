import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRegPage } from './log-reg.page';

const routes: Routes = [
  {
    path: '',
    component: LogRegPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRegPageRoutingModule {}
