import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologyComponent } from './ecology.component';

describe('EcologyComponent', () => {
  let component: EcologyComponent;
  let fixture: ComponentFixture<EcologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
