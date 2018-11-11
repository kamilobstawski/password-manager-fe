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

    ngOnInit() {
        this.entryService.listEntries()
            .subscribe(entries => {
                this.entries = entries;
            });
    }

    openLink(link) {
        window.open(link);
    }
}
