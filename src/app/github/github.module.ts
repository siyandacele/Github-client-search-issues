import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { CoreModule } from '../core/core.module';
import { GithubListComponent } from './github-list/github-list.component';
import { GithubRepositoryDetailsComponent } from './github-repository-details/github-repository-details.component';
import { GithubRepositoryIssuesComponent } from './components/github-repository-issues/github-repository-issues.component';
import { GithubRepositoryChartComponent } from './components/github-repository-chart/github-repository-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { MarkdownModule } from 'ngx-markdown';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GithubRepositoriesStore } from './store/github.store';
import { GithubService } from './services/github.service';
import { provideHttpClient } from '@angular/common/http';
import { NumberShortenerPipe } from '../pipes/number-shortener.pipe';
@NgModule({
  declarations: [
    GithubComponent,
    GithubListComponent,
    GithubRepositoryDetailsComponent,
    GithubRepositoryIssuesComponent,
    GithubRepositoryChartComponent,
    WelcomeComponent,
    NumberShortenerPipe,
  ],
  providers: [GithubService, GithubRepositoriesStore, provideHttpClient()],
  imports: [
    CommonModule,
    GithubRoutingModule,
    CoreModule,
    MarkdownModule.forRoot(),
    BaseChartDirective,
  ],
})
export class GithubModule {}
