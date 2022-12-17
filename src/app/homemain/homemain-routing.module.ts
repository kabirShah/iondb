import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemainPage } from './homemain.page';

const routes: Routes = [
  {
    path: '',
    component: HomemainPage
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemainPageRoutingModule {}
