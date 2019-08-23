import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { routing } from './routes/app.routing';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
    declarations: [
        HeaderComponent,
        TableComponent
    ],
    exports: [
        HeaderComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [
        LocalStorageService
    ]
})
export class CommonModule{}