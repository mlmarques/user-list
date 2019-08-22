import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { FormComponent } from './form/form.component';
import { TableComponent } from '../list/table/table.component';
import { ListModule } from '../list/list.module';

@NgModule({
    declarations: [
        UserComponent,
        FormComponent
    ],
    exports: [
        UserComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ListModule,
        routing
    ],
    providers: [
        UserService
    ]
})
export class UserModule{}