import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 404Page } from './404.page';

const routes: Routes = [
  {
    path: '',
    component: 404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class 404PageRoutingModule {}
