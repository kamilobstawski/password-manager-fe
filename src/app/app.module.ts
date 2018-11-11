import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
