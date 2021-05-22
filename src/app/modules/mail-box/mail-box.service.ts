import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MailBoxService {

  public mailFolderData$: Subject<any> = new Subject<any>();
  public mailListData$: Subject<any> = new Subject<any>();
  public mailPreviewData$: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) { }

  public getFolderData(){
    this.http.get("assets/mockData/folderData.json").subscribe(data => this.mailFolderData$.next(data));
  }

  public getListData(folderId: number){
    switch(+folderId) { 
      case 1: { 
        this.http.get("assets/mockData/mailInboxData.json").subscribe(data => this.mailListData$.next(data));
        break; 
      } 
      case 2: { 
        this.http.get("assets/mockData/mailSentData.json").subscribe(data => this.mailListData$.next(data));
         break; 
      }
      case 3: { 
        this.http.get("assets/mockData/mailDraftData.json").subscribe(data => this.mailListData$.next(data)); 
        break; 
      }
      case 4: { 
        this.http.get("assets/mockData/mailTrashData.json").subscribe(data => this.mailListData$.next(data));  
        break; 
      }
    }
  }
}
