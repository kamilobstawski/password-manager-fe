import { Component, OnInit } from '@angular/core';

import { EntryService } from '../_services/index';
import { Entry } from '../_models/index';


@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent  implements OnInit {
    entries: any;

    constructor(
        private entryService: EntryService,
    ) { }

    listEntries() {
        this.entryService.listEntries()
            .subscribe(entries => {
                this.entries = entries;
                console.log(entries)
            });
    }

    ngOnInit() {
        this.listEntries();
    }

    openLink(link) {
        window.open(link);
    }

    deleteEntry(entryId: number) {
        this.entryService.deleteEntry(entryId)
            .subscribe(
                data => {
                    this.listEntries();
                },
                error => {
                    console.log(error);
                }
);
    }
}
