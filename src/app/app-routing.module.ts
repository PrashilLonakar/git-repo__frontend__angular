import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './layout/containers/auth/sign-in/sign-in.component';
import { MainPageComponent } from './layout/containers/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'repo',
        loadChildren: () =>
          import('./repo/repo.module').then((mod) => mod.RepoModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((mod) => mod.UserModule),
      },
    ],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
