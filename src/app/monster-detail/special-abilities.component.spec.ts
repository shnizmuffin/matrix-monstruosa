import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAbilitiesComponent } from './special-abilities.component';

describe('SpecialAbilitiesComponent', () => {
  let component: SpecialAbilitiesComponent;
  let fixture: ComponentFixture<SpecialAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
