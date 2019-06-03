import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp52Component } from './comp52.component';

describe('Comp52Component', () => {
  let component: Comp52Component;
  let fixture: ComponentFixture<Comp52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
