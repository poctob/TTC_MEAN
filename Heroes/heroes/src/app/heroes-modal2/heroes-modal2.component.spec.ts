import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesModal2Component } from './heroes-modal2.component';

describe('HeroesModal2Component', () => {
  let component: HeroesModal2Component;
  let fixture: ComponentFixture<HeroesModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
