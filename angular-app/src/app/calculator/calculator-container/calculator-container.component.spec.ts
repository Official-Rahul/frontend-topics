import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorContainerComponent } from './calculator-container.component';

describe('CalculatorContainerComponent', () => {
  let component: CalculatorContainerComponent;
  let fixture: ComponentFixture<CalculatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
