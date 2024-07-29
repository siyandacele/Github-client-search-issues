import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Repository, RepositorySearchResult } from '../models/repository';
import { Observable } from 'rxjs';
import { IssueSearchResult } from '../models';
import { RepositoryQuery } from '../models';

@Injectable()
export class GithubService {
  private API_URL = 'https://api.github.com';
  readonly httpClient = inject(HttpClient);

  searchRepositories(repositoryName: string): Observable<RepositorySearchResult> {
    return this.httpClient.get<RepositorySearchResult>(
      `${this.API_URL}/search/repositories?q=${repositoryName}&per_page=40`,
    );
  }

  getRepository(query: RepositoryQuery): Observable<Repository> {
    return this.httpClient.get<Repository>(
      `${this.API_URL}/repos/${query.owner}/${query.repo}`,
    );
  }

  getRepoIssues(
    query: RepositoryQuery,
    state: string = '',
  ): Observable<IssueSearchResult> {
    const issueState = state ? `+state:${state}&page=0&per_page=1` : '&per_page=100';
    return this.httpClient.get<IssueSearchResult>(
      `${this.API_URL}/search/issues?q=repo:${query.owner}/${query.repo}/type:issue${issueState}`,
    );
  }
}
