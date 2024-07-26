import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubListComponent } from './github-list/github-list.component';
import { GithubRepositoryDetailsComponent } from './github-repository-details/github-repository-details.component';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'repositories', component: GithubListComponent},
      { path: 'repository/:repositoryName', component: GithubRepositoryDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
