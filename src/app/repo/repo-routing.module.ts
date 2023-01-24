import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRepo from '../repo';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: fromRepo.components[0],
  },
  {
    path: 'detail',
    component: fromRepo.components[1],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoRoutingModule {}
