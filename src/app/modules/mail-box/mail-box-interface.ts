export interface MailFolderInterface {
    folder_id : number,
    folder_name: string,
    count_no: number
}

export interface MailListInterface {
    mail_id: number,
    folder_id: number,
    sender_name: string,
    read_status? : boolean,
    mail_subject: string,
    mail_description: string,
    mail_date: string
}
