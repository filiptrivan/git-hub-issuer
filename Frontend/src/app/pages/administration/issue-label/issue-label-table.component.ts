import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { IssueLabel } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'issue-label-table',
    templateUrl: './issue-label-table.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent
    ]
})
export class IssueLabelTableComponent implements OnInit {
    cols: Column<IssueLabel>[];

    getIssueLabelTableDataObservableMethod = this.apiService.getIssueLabelTableData;
    exportIssueLabelTableDataToExcelObservableMethod = this.apiService.exportIssueLabelTableDataToExcel;
    deleteIssueLabelObservableMethod = this.apiService.deleteIssueLabel;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: this.translocoService.translate('Actions'), actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name:  this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
            {name: this.translocoService.translate('Name'), filterType: 'text', field: 'name'},
        ]
    }
}