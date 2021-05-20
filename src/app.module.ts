import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app/modules/app-routing/app-routing.module';
import { MailBoxModule } from './app/modules/mail-box/mail-box.module';
import { CommonLayoutsModule } from './app/layout/common-layouts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MailBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
