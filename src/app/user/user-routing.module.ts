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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
