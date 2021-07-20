import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [],
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  providers: [],
})
export class HeaderModule { }

