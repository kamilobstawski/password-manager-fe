import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EntryService } from '../_services/index';


@Component({
  templateUrl: './updateEntry.component.html',
  styleUrls: ['./updateEntry.component.css']
})
export class UpdateEntryComponent implements OnInit {
    entry: any;
    entry_id: number;

    constructor(
        private entryService: EntryService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.entry_id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.entryService.getEntry(this.entry_id)
            .subscribe(
                data => {
                    this.entry = data;
                },
                error => {
                    console.log(error);
                }
            );
    }

    updateEntry(entry) {
        this.entryService.updateEntry(entry)
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
