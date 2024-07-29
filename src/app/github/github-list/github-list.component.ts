import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GithubRepositoriesStore } from '../store/github.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'cci-github-list',
  templateUrl: './github-list.component.html',
})
export class GithubListComponent implements OnInit, OnDestroy {
  readonly store = inject(GithubRepositoriesStore);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  private subscriptions: Subscription[] = [];
  ngOnInit() {
    this.subscriptions.push(
      this.route.queryParams.subscribe(params => {
        const { repositoryName } = params;
        // This is going to be the guard
        if (!repositoryName) {
          this.router.navigate(['/']);
        }
        this.store.searchRepository(repositoryName);
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
