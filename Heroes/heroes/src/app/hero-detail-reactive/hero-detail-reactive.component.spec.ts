import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailReactiveComponent } from './hero-detail-reactive.component';

describe('HeroDetailReactiveComponent', () => {
  let component: HeroDetailReactiveComponent;
  let fixture: ComponentFixture<HeroDetailReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
