import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultrouteComponent } from './defaultroute.component';

describe('DefaultrouteComponent', () => {
  let component: DefaultrouteComponent;
  let fixture: ComponentFixture<DefaultrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
