import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendrediComponent } from './vendredi.component';

describe('VendrediComponent', () => {
  let component: VendrediComponent;
  let fixture: ComponentFixture<VendrediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendrediComponent]
    });
    fixture = TestBed.createComponent(VendrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
