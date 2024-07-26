import { Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';

export const routes: Routes = [{
   path: '', redirectTo: '', pathMatch: 'full',

}, {path: '',
  loadChildren: () => import('./github/github.module').then(m => m.GithubModule)}
];
