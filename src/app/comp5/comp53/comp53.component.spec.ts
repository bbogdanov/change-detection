import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp53Component } from './comp53.component';

describe('Comp53Component', () => {
  let component: Comp53Component;
  let fixture: ComponentFixture<Comp53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
