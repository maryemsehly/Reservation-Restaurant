import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeudiComponent } from './jeudi.component';

describe('JeudiComponent', () => {
  let component: JeudiComponent;
  let fixture: ComponentFixture<JeudiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeudiComponent]
    });
    fixture = TestBed.createComponent(JeudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
