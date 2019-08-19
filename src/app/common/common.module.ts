import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        routing
    ]
})
export class CommonModule{}