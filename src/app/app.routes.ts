import { Routes } from '@angular/router';

export const routes: Routes = [
  {
   path: '', redirectTo: '', pathMatch: 'full',

}, {path: '',
  loadChildren: () => import('./github/github.module').then(m => m.GithubModule)},

];
