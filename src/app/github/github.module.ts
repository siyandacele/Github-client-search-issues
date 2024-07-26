import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { CoreModule } from '../core/core.module';
import { GithubListComponent } from './github-list/github-list.component';
import { GithubRepositoryDetailsComponent } from './github-repository-details/github-repository-details.component';
import { GithubRepositoryIssuesComponent } from './components/github-repository-issues/github-repository-issues.component';

@NgModule({
  declarations: [
    GithubComponent,
    GithubListComponent,
    GithubRepositoryDetailsComponent,
    GithubRepositoryIssuesComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule,
    CoreModule
  ],
})
export class GithubModule {}
