import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MailFolderInterface, MailListInterface } from './mail-box-interface';

@Injectable({
  providedIn: 'root'
})

export class MailBoxService {

  public mailFolderData$: Subject<any> = new Subject<any>();
  public mailListData$: Subject<any> = new Subject<any>();
  public mailPreviewData$: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) { }

  public getFolderData(){
    this.http.get<Array<MailFolderInterface>>("assets/mockData/folderData.json").subscribe(
      data => this.mailFolderData$.next(data));
  }

  public getListData(folderId?: number){
    this.mailPreviewData$.next('');
    switch(folderId) { 
      case 1: { 
        this.http.get<Array<MailListInterface>>("assets/mockData/mailInboxData.json").subscribe(
          (data) => this.mailListData$.next(data),
          (error) => console.log(error));
        break; 
      } 
      case 2: { 
        this.http.get<Array<MailListInterface>>("assets/mockData/mailSentData.json").subscribe(
          (data) => this.mailListData$.next(data),
          (error) => console.log(error));
         break; 
      }
      case 3: { 
        this.http.get<Array<MailListInterface>>("assets/mockData/mailDraftData.json").subscribe(
          (data) => this.mailListData$.next(data),
          (error) => console.log(error));
        break; 
      }
      case 4: { 
        this.http.get<Array<MailListInterface>>("assets/mockData/mailTrashData.json").subscribe(
          (data) => this.mailListData$.next(data),
          (error) => console.log(error));  
        break; 
      }
      default: {
        this.http.get<Array<MailListInterface>>("assets/mockData/mailInboxData.json").subscribe(
          (data) => {
            console.log((data.filter(data => {return data.read_status === false})).length);
            this.mailListData$.next(data)
          },
          (error) => console.log(error));
        break; 
      }
    }
  }
}
