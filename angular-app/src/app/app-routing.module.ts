import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
    {path:'first', component:FirstComponent},
    {path:'second', component:SecondComponent},
    {path:'calculator', loadChildren:()=>import('./calculator/calculator.module').then(m=>m.CalculatorModule)},
    {path:'movie', loadChildren:()=>import('./movie/movie.module').then(m=>m.MovieModule)},
    {path:'weather', loadChildren:()=>import('./weather/weather.module').then(m=>m.WeatherModule)},
    {path:'**', component:ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}