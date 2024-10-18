import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAppComponent } from './sec-app.component';

describe('SecAppComponent', () => {
  let component: SecAppComponent;
  let fixture: ComponentFixture<SecAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecAppComponent]
    });
    fixture = TestBed.createComponent(SecAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
