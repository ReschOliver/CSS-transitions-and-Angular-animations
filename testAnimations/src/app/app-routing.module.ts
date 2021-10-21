import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ListAnimationComponent } from "./list-animation/list-animation.component";

const routes: Routes = [
  {path: '', component: OpenCloseComponent},
  {path: 'buttons' ,component: OpenCloseComponent},
  {path: 'list' ,component: ListAnimationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
