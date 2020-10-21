import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [WeatherContainerComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
