import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/business/entities/business-entities.generated';
import { Column, getPrimengDropdownNamebookOptions, SpiderlyDataTableComponent } from 'spiderly';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'issue-table',
    templateUrl: './issue-table.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent
    ]
})
export class IssueTableComponent implements OnInit {
    cols: Column<Issue>[];

    getIssueTableDataObservableMethod = this.apiService.getIssueTableData;
    exportIssueTableDataToExcelObservableMethod = this.apiService.exportIssueTableDataToExcel;
    deleteIssueObservableMethod = this.apiService.deleteIssue;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    async ngOnInit(){
        this.cols = [
            {name: this.translocoService.translate('Actions'), actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name:  this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
            {name: this.translocoService.translate('Id'), filterType: 'numeric', field: 'id'},
            {name: this.translocoService.translate('Title'), filterType: 'text', field: 'title'},
            {name: this.translocoService.translate('IsOpen'), filterType: 'boolean', field: 'isOpen'},
            {name: this.translocoService.translate('IssueLabelList'), filterType: 'multiselect', field: 'issueLabelsCommaSeparated', dropdownOrMultiselectValues: await firstValueFrom(getPrimengDropdownNamebookOptions(this.apiService.getIssueLabelsDropdownListForIssue)) },
            {name: this.translocoService.translate('CreatedAt'), filterType: 'date', field: 'createdAt'},
            {name: this.translocoService.translate('ModifiedAt'), filterType: 'date', field: 'modifiedAt'},
        ]
    }
}