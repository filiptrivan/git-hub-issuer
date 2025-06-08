import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSecurityService, TableFilter, TableResponse, Namebook, Codebook, LazyLoadSelectedIdsResult, VerificationTokenRequest, AuthResult, ExternalProvider } from 'spiderly';
import { ConfigService } from '../config.service';
import { Notification } from '../../entities/business-entities.generated';
import { NotificationSaveBody } from '../../entities/business-entities.generated';
import { Issue } from '../../entities/business-entities.generated';
import { IssueSaveBody } from '../../entities/business-entities.generated';
import { IssueMainUIForm } from '../../entities/business-entities.generated';
import { IssueAssignee } from '../../entities/business-entities.generated';
import { IssueAssigneeSaveBody } from '../../entities/business-entities.generated';
import { IssueAssigneeMainUIForm } from '../../entities/business-entities.generated';
import { IssueIssueLabel } from '../../entities/business-entities.generated';
import { IssueIssueLabelSaveBody } from '../../entities/business-entities.generated';
import { IssueIssueLabelMainUIForm } from '../../entities/business-entities.generated';
import { IssueLabel } from '../../entities/business-entities.generated';
import { IssueLabelSaveBody } from '../../entities/business-entities.generated';
import { IssueLabelMainUIForm } from '../../entities/business-entities.generated';
import { NotificationMainUIForm } from '../../entities/business-entities.generated';
import { UserExtended } from '../../entities/business-entities.generated';
import { UserExtendedSaveBody } from '../../entities/business-entities.generated';
import { UserExtendedMainUIForm } from '../../entities/business-entities.generated';
import { UserNotification } from '../../entities/business-entities.generated';
import { UserNotificationSaveBody } from '../../entities/business-entities.generated';
import { UserNotificationMainUIForm } from '../../entities/business-entities.generated';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneratedService extends ApiSecurityService {

    constructor(
        protected override http: HttpClient,
        protected override config: ConfigService
    ) {
        super(http, config);
    }

    sendNotificationEmail = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/SendNotificationEmail?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    deleteNotificationForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotificationForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsReadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsReadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsUnreadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsUnreadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    getNotificationsForCurrentUser = (tableFilterDTO: TableFilter): Observable<TableResponse<Notification>> => { 
        return this.http.post<TableResponse<Notification>>(`${this.config.apiUrl}/Notification/GetNotificationsForCurrentUser`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    getCurrentUserExtended = (): Observable<UserExtended> => { 
        return this.http.get<UserExtended>(`${this.config.apiUrl}/UserExtended/GetCurrentUserExtended`, this.config.httpSkipSpinnerOptions);
    }

    getIssueTableData = (tableFilterDTO: TableFilter): Observable<TableResponse<Issue>> => { 
        return this.http.post<TableResponse<Issue>>(`${this.config.apiUrl}/Issue/GetIssueTableData`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportIssueTableDataToExcel = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Issue/ExportIssueTableDataToExcel`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    getIssueList = (): Observable<Issue[]> => { 
        return this.http.get<Issue[]>(`${this.config.apiUrl}/Issue/GetIssueList`, this.config.httpOptions);
    }

    getIssueMainUIFormDTO = (id: number): Observable<IssueMainUIForm> => { 
        return this.http.get<IssueMainUIForm>(`${this.config.apiUrl}/Issue/GetIssueMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getIssue = (id: number): Observable<Issue> => { 
        return this.http.get<Issue>(`${this.config.apiUrl}/Issue/GetIssue?id=${id}`, this.config.httpOptions);
    }



    getIssueLabelsDropdownListForIssue = (issueId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Issue/GetIssueLabelsDropdownListForIssue?issueId=${issueId}`, this.config.httpSkipSpinnerOptions);
    }




    getIssueLabelsNamebookListForIssue = (id: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Issue/GetIssueLabelsNamebookListForIssue?id=${id}`, this.config.httpSkipSpinnerOptions);
    }

    getAssigneesTableDataForIssue = (tableFilterDTO: TableFilter): Observable<TableResponse<UserExtended>> => { 
        return this.http.post<TableResponse<UserExtended>>(`${this.config.apiUrl}/Issue/GetAssigneesTableDataForIssue`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportAssigneesTableDataToExcelForIssue = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Issue/ExportAssigneesTableDataToExcelForIssue`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    lazyLoadSelectedAssigneesIdsForIssue = (tableFilterDTO: TableFilter): Observable<LazyLoadSelectedIdsResult> => { 
        return this.http.post<LazyLoadSelectedIdsResult>(`${this.config.apiUrl}/Issue/LazyLoadSelectedAssigneesIdsForIssue`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    saveIssue = (saveBodyDTO: IssueSaveBody): Observable<IssueSaveBody> => { 
        return this.http.put<IssueSaveBody>(`${this.config.apiUrl}/Issue/SaveIssue`, saveBodyDTO, this.config.httpOptions);
    }



    deleteIssue = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Issue/DeleteIssue?id=${id}`, this.config.httpOptions);
    }


    getIssueLabelTableData = (tableFilterDTO: TableFilter): Observable<TableResponse<IssueLabel>> => { 
        return this.http.post<TableResponse<IssueLabel>>(`${this.config.apiUrl}/IssueLabel/GetIssueLabelTableData`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportIssueLabelTableDataToExcel = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/IssueLabel/ExportIssueLabelTableDataToExcel`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    getIssueLabelList = (): Observable<IssueLabel[]> => { 
        return this.http.get<IssueLabel[]>(`${this.config.apiUrl}/IssueLabel/GetIssueLabelList`, this.config.httpOptions);
    }

    getIssueLabelMainUIFormDTO = (id: number): Observable<IssueLabelMainUIForm> => { 
        return this.http.get<IssueLabelMainUIForm>(`${this.config.apiUrl}/IssueLabel/GetIssueLabelMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getIssueLabel = (id: number): Observable<IssueLabel> => { 
        return this.http.get<IssueLabel>(`${this.config.apiUrl}/IssueLabel/GetIssueLabel?id=${id}`, this.config.httpOptions);
    }









    saveIssueLabel = (saveBodyDTO: IssueLabelSaveBody): Observable<IssueLabelSaveBody> => { 
        return this.http.put<IssueLabelSaveBody>(`${this.config.apiUrl}/IssueLabel/SaveIssueLabel`, saveBodyDTO, this.config.httpOptions);
    }



    deleteIssueLabel = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/IssueLabel/DeleteIssueLabel?id=${id}`, this.config.httpOptions);
    }


    getNotificationTableData = (tableFilterDTO: TableFilter): Observable<TableResponse<Notification>> => { 
        return this.http.post<TableResponse<Notification>>(`${this.config.apiUrl}/Notification/GetNotificationTableData`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportNotificationTableDataToExcel = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportNotificationTableDataToExcel`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    getNotificationList = (): Observable<Notification[]> => { 
        return this.http.get<Notification[]>(`${this.config.apiUrl}/Notification/GetNotificationList`, this.config.httpOptions);
    }

    getNotificationMainUIFormDTO = (id: number): Observable<NotificationMainUIForm> => { 
        return this.http.get<NotificationMainUIForm>(`${this.config.apiUrl}/Notification/GetNotificationMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getNotification = (id: number): Observable<Notification> => { 
        return this.http.get<Notification>(`${this.config.apiUrl}/Notification/GetNotification?id=${id}`, this.config.httpOptions);
    }







    getRecipientsTableDataForNotification = (tableFilterDTO: TableFilter): Observable<TableResponse<UserExtended>> => { 
        return this.http.post<TableResponse<UserExtended>>(`${this.config.apiUrl}/Notification/GetRecipientsTableDataForNotification`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportRecipientsTableDataToExcelForNotification = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportRecipientsTableDataToExcelForNotification`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    lazyLoadSelectedRecipientsIdsForNotification = (tableFilterDTO: TableFilter): Observable<LazyLoadSelectedIdsResult> => { 
        return this.http.post<LazyLoadSelectedIdsResult>(`${this.config.apiUrl}/Notification/LazyLoadSelectedRecipientsIdsForNotification`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    saveNotification = (saveBodyDTO: NotificationSaveBody): Observable<NotificationSaveBody> => { 
        return this.http.put<NotificationSaveBody>(`${this.config.apiUrl}/Notification/SaveNotification`, saveBodyDTO, this.config.httpOptions);
    }



    deleteNotification = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotification?id=${id}`, this.config.httpOptions);
    }


    getUserExtendedTableData = (tableFilterDTO: TableFilter): Observable<TableResponse<UserExtended>> => { 
        return this.http.post<TableResponse<UserExtended>>(`${this.config.apiUrl}/UserExtended/GetUserExtendedTableData`, tableFilterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportUserExtendedTableDataToExcel = (tableFilterDTO: TableFilter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/UserExtended/ExportUserExtendedTableDataToExcel`, tableFilterDTO, { observe: 'response', responseType: 'blob' });
    }

    getUserExtendedList = (): Observable<UserExtended[]> => { 
        return this.http.get<UserExtended[]>(`${this.config.apiUrl}/UserExtended/GetUserExtendedList`, this.config.httpOptions);
    }

    getUserExtendedMainUIFormDTO = (id: number): Observable<UserExtendedMainUIForm> => { 
        return this.http.get<UserExtendedMainUIForm>(`${this.config.apiUrl}/UserExtended/GetUserExtendedMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getUserExtended = (id: number): Observable<UserExtended> => { 
        return this.http.get<UserExtended>(`${this.config.apiUrl}/UserExtended/GetUserExtended?id=${id}`, this.config.httpOptions);
    }









    saveUserExtended = (saveBodyDTO: UserExtendedSaveBody): Observable<UserExtendedSaveBody> => { 
        return this.http.put<UserExtendedSaveBody>(`${this.config.apiUrl}/UserExtended/SaveUserExtended`, saveBodyDTO, this.config.httpOptions);
    }



    deleteUserExtended = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/UserExtended/DeleteUserExtended?id=${id}`, this.config.httpOptions);
    }


}
