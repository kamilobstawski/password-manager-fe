import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { EntryService } from '../_services/index';
import { Entry } from '../_models/index';


@Component({
  templateUrl: './createEntry.component.html',
  styleUrls: ['./createEntry.component.css']
})
export class CreateEntryComponent {
    entry = new Entry();

    constructor(
        private entryService: EntryService,
        private router: Router,
    ) { }

    addEntry(entry) {
        this.entryService.createEntry(entry)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                }
            );
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
