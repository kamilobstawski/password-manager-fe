import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EntryComponent } from './entry/entry.component';
import { CreateEntryComponent } from './createEntry/createEntry.component';
import { UpdateEntryComponent } from './updateEntry/updateEntry.component';
import { TemporaryEntryComponent } from './temporaryEntry/temporaryEntry.component';
import { EntryService } from './_services/entry.service';


@NgModule({
    declarations: [
        AppComponent,
        EntryComponent,
        CreateEntryComponent,
        UpdateEntryComponent,
        TemporaryEntryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        EntryService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
