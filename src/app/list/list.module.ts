import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { UserService } from './user/user.service';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        UserComponent,
        TableComponent,
        FormComponent
    ],
    exports: [
        UserComponent,
        TableComponent,
        FormComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class ListModule{}