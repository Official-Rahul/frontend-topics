import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [CalculatorContainerComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
