import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBusinessFormComponent } from './signup-business-form.component';

describe('SignupBusinessFormComponent', () => {
  let component: SignupBusinessFormComponent;
  let fixture: ComponentFixture<SignupBusinessFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignupBusinessFormComponent]
    });
    fixture = TestBed.createComponent(SignupBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
