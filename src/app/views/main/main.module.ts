import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { InternItemComponent } from './intern-item/intern-item.component';
// import { InternService } from '../../service/intern.service';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  exports: [MainComponent],
  declarations: [MainComponent, InternItemComponent, PopupComponent],
  providers: [],
})
export class MainModule {}
