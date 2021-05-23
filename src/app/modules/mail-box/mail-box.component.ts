import { Component, OnInit } from '@angular/core';
import { MailBoxService } from './mail-box.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  constructor(private mailService: MailBoxService ) { }

  ngOnInit(){
    this.mailService.getFolderData();
    this.mailService.getListData();
  }
  
}
