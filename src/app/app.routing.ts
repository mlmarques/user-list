import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TableComponent } from './list/table/table.component';
import { FormComponent } from './users/form/form.component';
import { UserComponent } from './users/user/user.component';

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
        component: FormComponent
    },
    {
        path: 'form/:user',
        component: FormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);