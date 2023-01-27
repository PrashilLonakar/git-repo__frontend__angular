import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromUser from '../user';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'detail',
    pathMatch: 'full',
  },
  {
    path: 'detail',
    component: fromUser.components[0],
  },
  {
    path: ':username/repo',
    loadChildren: () =>
      import('../repo/repo.module').then((mod) => mod.RepoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
