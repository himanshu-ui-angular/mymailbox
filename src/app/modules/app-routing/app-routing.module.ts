import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoute: Routes =
  [
    {
      path: '',
      pathMatch : 'full',
      redirectTo: 'mailbox'
    },
    {
      path: 'mailbox',
      loadChildren: () => import('../../modules/mail-box/mail-box.module').then(m => m.MailBoxModule)
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
