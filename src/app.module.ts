import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/modules/app-routing/app-routing.module';
import { MailBoxModule } from './app/modules/mail-box/mail-box.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MailBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
