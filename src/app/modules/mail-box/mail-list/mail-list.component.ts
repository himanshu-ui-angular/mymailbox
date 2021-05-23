import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MailListInterface } from '../mail-box-interface';
import { MailBoxService } from '../mail-box.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit, OnDestroy {

  public mailList: Array<MailListInterface> = [];
  public selectedIndex!: number;
  
  constructor(private mailService: MailBoxService) { }

  ngOnInit(){
    this.mailService.mailListData$.subscribe(mailData => this.mailList = mailData);
  }

  getPreviewDetails(mailData: MailListInterface, isMailActive: number){
    this.mailService.mailPreviewData$.next(mailData);
    this.selectedIndex!;
    console.log(this.selectedIndex);
    this.selectedIndex = isMailActive;
    console.log(this.selectedIndex);
  }

  ngOnDestroy() {
    this.mailService.mailListData$ ? this.mailService.mailFolderData$.unsubscribe() : '';
  }

}
