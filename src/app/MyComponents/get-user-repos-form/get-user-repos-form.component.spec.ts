import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserReposFormComponent } from './get-user-repos-form.component';

describe('GetUserReposFormComponent', () => {
  let component: GetUserReposFormComponent;
  let fixture: ComponentFixture<GetUserReposFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserReposFormComponent]
    });
    fixture = TestBed.createComponent(GetUserReposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
