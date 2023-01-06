import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './layout/containers/auth/sign-in/sign-in.component';
import { MainPageComponent } from './layout/containers/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [],
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
