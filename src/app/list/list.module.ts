import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { UserService } from './user/user.service';

@NgModule({
    declarations: [
        UserComponent,
        TableComponent
    ],
    exports: [
        UserComponent,
        TableComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class ListModule{}