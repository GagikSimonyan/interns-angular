import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { InternItemComponent } from './intern-item/intern-item.component';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { InternService } from './intern.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  exports: [MainComponent],
  declarations: [MainComponent, InternItemComponent, PopupComponent],
  providers: [InternService],
})
export class MainModule {}
