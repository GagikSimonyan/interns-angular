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

@NgModule({
  declarations: [AppComponent, FooterComponent, SearchPipe],
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
