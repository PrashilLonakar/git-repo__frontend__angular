import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './containers/main-page/main-page.component';
import * as fromAuthComponents from './containers/auth';
import { SharedModule } from '../shared/shared.module';

const layoutComponents = [HeaderComponent, MainPageComponent];

@NgModule({
  declarations: [...layoutComponents, ...fromAuthComponents.components],
  imports: [SharedModule],
  exports: [...layoutComponents, ...fromAuthComponents.components],
  providers: [],
  bootstrap: [],
})
export class LayoutModule {}
