import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercrediComponent } from './mercredi.component';

describe('MercrediComponent', () => {
  let component: MercrediComponent;
  let fixture: ComponentFixture<MercrediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercrediComponent]
    });
    fixture = TestBed.createComponent(MercrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
