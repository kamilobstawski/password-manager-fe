import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EntryService } from '../_services/index';


@Component({
  templateUrl: './temporaryEntry.component.html',
  styleUrls: ['./temporaryEntry.component.css']
})
export class TemporaryEntryComponent  implements OnInit {
    entry: any;
    token: string;

    constructor(
        private entryService: EntryService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.token = route.snapshot.params['key'];
    }

    ngOnInit() {
        this.entryService.temporaryEntry(this.token)
            .subscribe(
                data => {
                    this.entry = data;
                },
                error => {
                    this.router.navigate(['/'])
                }
            );
    }

    // updateEntry(entry) {
    //     this.entryService.updateEntry(entry)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate(['/']);
    //             },
    //             error => {
    //                 console.log(error);
    //             }
    //         );
    // }
    //
    // goBack() {
    //     this.router.navigate(['/']);
    // }

}
