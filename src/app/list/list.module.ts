import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { TableComponent } from './table/table.component';
import { routing } from '../app.routing';

@NgModule({
    declarations: [
        TableComponent
    ],
    exports: [
        TableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: []
})
export class ListModule{}