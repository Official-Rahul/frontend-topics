import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieContainerComponent } from './movie-container/movie-container.component';


const routes: Routes = [
    {path:'', component:MovieContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
