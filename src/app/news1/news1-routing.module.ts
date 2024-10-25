import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { News1Page } from './news1.page';

const routes: Routes = [
  {
    path: '',
    component: News1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class News1PageRoutingModule {}
