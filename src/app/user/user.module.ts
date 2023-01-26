import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import * as fromUser from '../user';

@NgModule({
  declarations: [...fromUser.components],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  providers: [],
})
export class UserModule {}
