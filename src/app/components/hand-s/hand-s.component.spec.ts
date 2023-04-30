import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandSComponent } from './hand-s.component';

describe('HandSComponent', () => {
  let component: HandSComponent;
  let fixture: ComponentFixture<HandSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
