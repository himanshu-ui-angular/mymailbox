import { Component, OnInit } from '@angular/core';
import { MailBoxService } from 'src/app/modules/mail-box/mail-box.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private mailService: MailBoxService) { }

  ngOnInit(): void {
  }

}
