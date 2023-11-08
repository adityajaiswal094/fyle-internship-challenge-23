import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserReposComponent } from './show-user-repos.component';

describe('ShowUserReposComponent', () => {
  let component: ShowUserReposComponent;
  let fixture: ComponentFixture<ShowUserReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUserReposComponent]
    });
    fixture = TestBed.createComponent(ShowUserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
