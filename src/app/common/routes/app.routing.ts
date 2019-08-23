import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TableComponent } from '../table/table.component';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { UserComponent } from '../../users/user/user.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'form',
        component: UserFormComponent
    },
    {
        path: 'form/:user',
        component: UserFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);