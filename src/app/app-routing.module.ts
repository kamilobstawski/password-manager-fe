import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry/entry.component';
import { CreateEntryComponent } from './createEntry/createEntry.component';
import { UpdateEntryComponent } from './updateEntry/updateEntry.component';
import { TemporaryEntryComponent } from './temporaryEntry/temporaryEntry.component';



const appRoutes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'create-entry', component: CreateEntryComponent },
  { path: 'update-entry/:id', component: UpdateEntryComponent },
  { path: 'temporary-entry/:key', component: TemporaryEntryComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
