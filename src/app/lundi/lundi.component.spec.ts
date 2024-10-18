import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LundiComponent } from './lundi.component';

describe('LundiComponent', () => {
  let component: LundiComponent;
  let fixture: ComponentFixture<LundiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LundiComponent]
    });
    fixture = TestBed.createComponent(LundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
