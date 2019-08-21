import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './list/table/table.component';
import { FormComponent } from './list/form/form.component';
import { UserComponent } from './list/user/user.component';

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