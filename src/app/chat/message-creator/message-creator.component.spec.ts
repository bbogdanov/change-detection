import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreatorComponent } from './message-creator.component';

describe('MessageCreatorComponent', () => {
  let component: MessageCreatorComponent;
  let fixture: ComponentFixture<MessageCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
