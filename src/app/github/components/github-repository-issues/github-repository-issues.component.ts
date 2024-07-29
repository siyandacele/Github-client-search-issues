import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Issue } from '../../models';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GithubRepositoriesStore } from '../../store/github.store';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cci-github-repository-issues',
  templateUrl: './github-repository-issues.component.html',
})
export class GithubRepositoryIssuesComponent implements OnInit, OnDestroy {
  readonly store = inject(GithubRepositoriesStore);
  issuesList$ = new BehaviorSubject<Issue[]>([]);
  issues$ = toObservable(this.store.issues);

  private subscriptions: Subscription[] = [];
  constructor() {
    this.issues$.subscribe(issues => {
      this.issuesList$.next(issues.items);
    });
  }
  ngOnInit(): void {}

  filterIssues(value: string) {
    this.subscriptions.push(
      this.issues$.subscribe(issues => {
        if (value !== 'all') {
          this.issuesList$.next(issues.items.filter(issue => issue.state === value));
        } else {
          this.issuesList$.next(issues.items);
        }
      }),
    );
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}
