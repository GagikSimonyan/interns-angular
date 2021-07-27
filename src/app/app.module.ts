import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './views/header/header.module';
import { MainModule } from './views/main/main.module';
import { FooterComponent } from './views/footer/footer.component';
import { SearchPipe } from './pipe/search.pipe';
import { InternService } from './service/intern.service';
import { HomeComponent } from './home/home.component';
import { AddInternComponent } from './add-intern/add-intern.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchPipe,
    HomeComponent,
    AddInternComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
  ],
  providers: [InternService],
  bootstrap: [AppComponent],
})
export class AppModule {}
