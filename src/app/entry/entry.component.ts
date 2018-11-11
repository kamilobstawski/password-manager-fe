import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntryService } from '../_services/index';


@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent  implements OnInit {
    entries: any;

    constructor(
        private entryService: EntryService,
        private router: Router,
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

    addEntry() {
        this.router.navigate(['/create-entry']);
    }

    updateEntry(entryId) {
        this.router.navigate(['/update-entry', entryId]);
    }
}
