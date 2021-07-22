import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { InternItemComponent } from './intern-item/intern-item.component';
import { PopupComponent } from './popup/popup.component';
import { InternService } from './intern.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [MainComponent],
  declarations: [MainComponent, InternItemComponent, PopupComponent],
  providers: [InternService],
})
export class MainModule {}
