import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'song/:id',
  //   loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)
  // },
  {
    path:'',
    redirectTo:'homemain',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'homemain',
    loadChildren: () => import('./homemain/homemain.module').then( m => m.HomemainPageModule)
  },
  {
    path: 'log-reg',
    loadChildren: () => import('./log-reg/log-reg.module').then( m => m.LogRegPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
