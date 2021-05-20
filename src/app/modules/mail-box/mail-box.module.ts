import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailBoxRoutingModule } from './mail-box-routing.module';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailBoxComponent } from './mail-box.component';
import { MailPreviewComponent } from './mail-list/mail-preview/mail-preview.component';
import { CommonLayoutsModule } from 'src/app/layout/common-layouts.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MailBoxComponent,
    MailListComponent,
    MailPreviewComponent
  ],
  imports: [
    CommonModule,
    CommonLayoutsModule,
    RouterModule,
    MailBoxRoutingModule
  ]
})
export class MailBoxModule { }
