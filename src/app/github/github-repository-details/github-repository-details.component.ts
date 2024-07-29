import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubRepositoriesStore } from '../store/github.store';

@Component({
  selector: 'cci-github-repository-details',
  templateUrl: './github-repository-details.component.html',
})
export class GithubRepositoryDetailsComponent implements OnInit, OnDestroy {
  readonly store = inject(GithubRepositoriesStore);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        const { owner, repo } = params;
        this.store.selectRepository({
          owner,
          repo,
        });
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
