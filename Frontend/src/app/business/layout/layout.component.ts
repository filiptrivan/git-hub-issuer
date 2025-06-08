import { TranslocoService } from '@jsverse/transloco';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/business/services/auth/auth.service';
import { ConfigService } from 'src/app/business/services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent, LayoutBaseComponent, AppSidebarComponent, AppTopBarComponent, LayoutBaseService, SpiderlyMenuItem} from 'spiderly';
import { CommonModule } from '@angular/common';
import { BusinessPermissionCodes } from '../enums/business-enums.generated';
import { SecurityPermissionCodes } from 'spiderly';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        FooterComponent,
        AppSidebarComponent,
        AppTopBarComponent,
    ]
})
export class LayoutComponent extends LayoutBaseComponent implements OnInit, OnDestroy {
    menu: SpiderlyMenuItem[];

    constructor(
        protected override layoutService: LayoutBaseService, 
        protected override renderer: Renderer2, 
        protected override router: Router,
        private authService: AuthService,
        private config: ConfigService,
        private translocoService: TranslocoService
    ) {
        super(layoutService, renderer, router);
    }

    ngOnInit(): void {
        this.menu = [
            {
                visible: true,
                items: [
                    { 
                        label: this.translocoService.translate('Home'), 
                        icon: 'pi pi-fw pi-home', 
                        routerLink: [''],
                        visible: true,
                    },
                    { 
                        label: this.translocoService.translate('Issues'), 
                        icon: 'pi pi-fw pi-code', 
                        routerLink: ['issues'],
                        visible: true,
                    },
                    {
                        label: this.translocoService.translate('Administration'),
                        icon: 'pi pi-fw pi-cog',
                        visible: true,
                        hasPermission: (permissionCodes: string[]): boolean => { 
                            return (
                                permissionCodes?.includes(BusinessPermissionCodes.ReadUserExtended) ||
                                permissionCodes?.includes(SecurityPermissionCodes.ReadRole) ||
                                permissionCodes?.includes(BusinessPermissionCodes.ReadNotification)
                            )
                        },
                        items: [
                            {
                                label: this.translocoService.translate('IssueLabels'),
                                icon: 'pi pi-fw pi-tag',
                                routerLink: [`/${this.config.administrationSlug}/issue-labels`],
                                visible: true,
                            },
                            {
                                label: this.translocoService.translate('UserList'),
                                icon: 'pi pi-fw pi-user',
                                routerLink: [`/${this.config.administrationSlug}/users`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(BusinessPermissionCodes.ReadUserExtended)
                                    )
                                },
                                visible: true,
                            },
                            {
                                label: this.translocoService.translate('RoleList'),
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: [`/${this.config.administrationSlug}/roles`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(SecurityPermissionCodes.ReadRole)
                                    )
                                },
                                visible: true,
                            },
                            {
                                label: this.translocoService.translate('NotificationList'),
                                icon: 'pi pi-fw pi-bell',
                                routerLink: [`/${this.config.administrationSlug}/notifications`],
                                hasPermission: (permissionCodes: string[]): boolean => { 
                                    return (
                                        permissionCodes?.includes(BusinessPermissionCodes.ReadNotification)
                                    )
                                },
                                visible: true,
                            },
                        ]
                    },
                ]
            },
        ];
    }

    override onAfterNgDestroy = () => {
        
    }
}

