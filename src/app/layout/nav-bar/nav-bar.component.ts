import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailBoxService } from 'src/app/modules/mail-box/mail-box.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public folderData: any = [];
  constructor(private mailService: MailBoxService) { }

  ngOnInit(){
    this.mailService.mailFolderData$.subscribe(data => this.folderData = data);
  }

  public getFolderList(folderId: number){
    this.mailService.getListData(folderId);
  }

  ngOnDestroy() {
    this.mailService.mailFolderData$ ? this.mailService.mailFolderData$.unsubscribe() : '';
  }

}
