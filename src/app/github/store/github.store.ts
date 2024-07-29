import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { pipe, tap, switchMap, forkJoin } from 'rxjs';
import { GithubService } from '../services/github.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import {
  Repository,
  repositoryData,
  IssueSearchResult,
  IssuesFilter,
  RepositoryQuery,
} from '../models';

type GithubRepositoriesState = {
  searchTerm: string;
  repositories: Repository[];
  totalCount: number;
  resultsCount: number;
  isLoading: boolean;
  repository: Repository;
  issues: IssueSearchResult;
  error: {
    isError: boolean;
    errorMessage: string;
  };
};

const initialState: GithubRepositoriesState = {
  searchTerm: '',
  repositories: [],
  totalCount: 0,
  resultsCount: 0,
  isLoading: false,
  repository: repositoryData,
  issues: {
    total_count: 0,
    open: 0,
    closed: 0,
    incomplete_status: false,
    items: [],
  },
  error: {
    isError: false,
    errorMessage: '',
  },
};

export const GithubRepositoriesStore = signalStore(
  withState(initialState),
  withMethods((store, githubService = inject(GithubService)) => ({
    searchRepository: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(query => {
          return githubService.searchRepositories(query).pipe(
            tapResponse({
              next: ({ items, total_count }) => {
                return patchState(store, {
                  repositories: items,
                  totalCount: total_count,
                });
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),
    selectRepository: rxMethod<RepositoryQuery>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(query => {
          const findRepository = store
            .repositories()
            .find(repository => repository.full_name === `${query.owner}/${query.repo}`);
          if (findRepository) {
          }
          return forkJoin([
            githubService.getRepository(query),
            githubService.getRepoIssues(query),
            githubService.getRepoIssues(query, IssuesFilter.Open),
            githubService.getRepoIssues(query, IssuesFilter.Closed),
          ]).pipe(
            tapResponse({
              next: ([repository, issues, openIssues, closedIssues]) => {
                return patchState(store, {
                  repository,
                  issues: {
                    ...issues,
                    closed: closedIssues.total_count,
                    open: openIssues.total_count,
                  },
                });
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),
  })),
);
