import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [FormsModule],
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  providers: [],
})
export class HeaderModule { }

