import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcomponentsComponent } from './generalcomponents.component';

describe('GeneralcomponentsComponent', () => {
  let component: GeneralcomponentsComponent;
  let fixture: ComponentFixture<GeneralcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
