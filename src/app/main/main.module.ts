import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { InternItemComponent } from './intern-item/intern-item.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [BrowserModule],
  exports: [MainComponent],
  declarations: [MainComponent, InternItemComponent, PopupComponent],
  providers: [],
})
export class MainModule { }
