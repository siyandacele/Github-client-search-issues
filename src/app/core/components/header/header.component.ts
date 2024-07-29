import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cci-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  value = '';
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams.subscribe(params => {
        const { repositoryName } = params;
        if (repositoryName) {
          this.value = repositoryName;
        }
      }),
    );
  }

  searchRepositories() {
    // Lazy plan...
    if (this.value) {
      this.router.navigate(['/repositories'], {
        queryParams: { repositoryName: this.value },
      });
    }
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}
