import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailListInterface } from '../../mail-box-interface';
import { MailBoxService } from '../../mail-box.service';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.css']
})
export class MailPreviewComponent implements OnInit, OnDestroy {

  public mailPreview: MailListInterface | undefined;
  constructor(private mailService: MailBoxService) { }

  ngOnInit(){
    this.mailService.mailPreviewData$.subscribe(data => this.mailPreview = data);
  }

  ngOnDestroy(){
    this.mailService.mailPreviewData$.unsubscribe();
  }
}
