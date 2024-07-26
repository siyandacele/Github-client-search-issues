import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoryIssuesComponent } from './github-repository-issues.component';

describe('GithubRepositoryIssuesComponent', () => {
  let component: GithubRepositoryIssuesComponent;
  let fixture: ComponentFixture<GithubRepositoryIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubRepositoryIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepositoryIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
