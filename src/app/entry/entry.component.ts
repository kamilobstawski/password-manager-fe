import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntryService, CredentialService } from '../_services/index';
import { User } from '../_models/index';


@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent  implements OnInit {
    entries: any;

    constructor(
        private entryService: EntryService,
        private credentialService: CredentialService,
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

    generateEntry(entryId: number) {
        this.entryService.generateLink(entryId)
            .subscribe(
                data => {
                    window.alert(data['link'])
                },
                error => {
                    console.log(error);
                }
            );
    }

    login() {
        let user = new User();
        user.username = 'admin';
        user.password = 'test12345';
        this.credentialService.login(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data['token']);
                    location.reload();
                },
                error => {
                    console.log(error);
                }
            )
    }

    logout() {
        localStorage.removeItem('token');
        location.reload();
    }

}
