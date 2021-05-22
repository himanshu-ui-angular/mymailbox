import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MailBoxService } from '../mail-box.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit, OnDestroy {

  public mailList: any = [];
  constructor(private mailService: MailBoxService) { }

  ngOnInit(){
    this.mailService.mailListData$.subscribe(mailData => this.mailList = mailData);
  }

  getPreviewDetails(mailData: any){
    this.mailService.mailPreviewData$.next(mailData);
  }

  ngOnDestroy() {
    this.mailService.mailListData$ ? this.mailService.mailFolderData$.unsubscribe() : '';
  }

}
