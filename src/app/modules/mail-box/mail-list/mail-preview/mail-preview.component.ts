import { Component, OnInit } from '@angular/core';
import { MailBoxService } from '../../mail-box.service';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.css']
})
export class MailPreviewComponent implements OnInit {

  public mailPreview: any = '';
  constructor(private mailService: MailBoxService) { }

  ngOnInit(){
    this.mailService.mailPreviewData$.subscribe(data => this.mailPreview = data);
  }

}
