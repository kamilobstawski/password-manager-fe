import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry/entry.component';
import { CreateEntryComponent } from './createEntry/createEntry.component';


const appRoutes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'create-entry', component: CreateEntryComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
