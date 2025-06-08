import { Component, OnInit } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Column, SpiderlyDataTableComponent } from 'spiderly';
import { ApiService } from 'src/app/business/services/api/api.service';
import { Notification } from 'src/app/business/entities/business-entities.generated';

@Component({
    selector: 'notification-table',
    templateUrl: './notification-table.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent
    ]
})
export class NotificationTableComponent implements OnInit {
    cols: Column<Notification>[];

    getNotificationTableDataObservableMethod = this.apiService.getNotificationTableData;
    exportNotificationTableDataToExcelObservableMethod = this.apiService.exportNotificationTableDataToExcel;
    deleteNotificationObservableMethod = this.apiService.deleteNotification;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: this.translocoService.translate('Actions'), actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name: this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
            {name: this.translocoService.translate('Title'), filterType: 'text', field: 'title'},
            {name: this.translocoService.translate('CreatedAt'), filterType: 'date', field: 'createdAt', showMatchModes: true},
        ]
    }

}

