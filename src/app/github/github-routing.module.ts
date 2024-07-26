import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubListComponent } from './github-list/github-list.component';
import { GithubRepositoryDetailsComponent } from './github-repository-details/github-repository-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      {path:'', component: WelcomeComponent},
      { path: 'repositories', component: GithubListComponent},
      { path: 'repository/:repositoryName', component: GithubRepositoryDetailsComponent},
      { path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
