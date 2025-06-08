import { InMemoryScrollingOptions, RouterConfigOptions, Routes } from '@angular/router';
import { AuthGuard, NotAuthGuard } from 'spiderly';
import { LayoutComponent } from './business/layout/layout.component';

export const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
                canActivate: [AuthGuard]
            },
            {
                path: 'issues',
                loadComponent: () => import('./pages/issue/issue-table.component').then(c => c.IssueTableComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'issues/:id',
                loadComponent: () => import('./pages/issue/issue-details.component').then(c => c.IssueDetailsComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/users',
                loadComponent: () => import('./pages/administration/user/user-table.component').then(c => c.UserTableComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/users/:id',
                loadComponent: () => import('./pages/administration/user/user-details.component').then(c => c.UserDetailsComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/roles',
                loadComponent: () => import('./pages/administration/role/role-table.component').then(c => c.RoleTableComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/roles/:id',
                loadComponent: () => import('./pages/administration/role/role-details.component').then(c => c.RoleDetailsComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/notifications',
                loadComponent: () => import('./pages/administration/notification/notification-table.component').then(c => c.NotificationTableComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/notifications/:id',
                loadComponent: () => import('./pages/administration/notification/notification-details.component').then(c => c.NotificationDetailsComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/issue-labels',
                loadComponent: () => import('./pages/administration/issue-label/issue-label-table.component').then(c => c.IssueLabelTableComponent),
                canActivate: [AuthGuard],
            },
            {
                path: 'administration/issue-labels/:id',
                loadComponent: () => import('./pages/administration/issue-label/issue-label-details.component').then(c => c.IssueLabelDetailsComponent),
                canActivate: [AuthGuard],
            },
            { 
                path: 'notifications',
                loadComponent: () => import('./pages/notification/notification.component').then(c => c.NotificationComponent),
                canActivate: [AuthGuard]
            },
        ],
    },
    {
        path: 'login',
        loadComponent: () => import('spiderly').then(c => c.LoginComponent),
        canActivate: [NotAuthGuard],
    },
    {
        path: 'registration', loadComponent: () => import('spiderly').then(c => c.RegistrationComponent),
        canActivate: [NotAuthGuard],
    },
    { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent) },
    { path: 'user-agreement', loadComponent: () => import('./pages/user-agreement/user-agreement.component').then(c => c.UserAgreementComponent) },
    { path: 'not-found', loadComponent: () => import('spiderly').then(c => c.NotFoundComponent) },
    { path: '**', redirectTo: 'not-found' },
];

export const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
};

export const routerConfigOptions: RouterConfigOptions = {
    onSameUrlNavigation: 'reload',
};
