import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable()
export class EntryService {

    constructor(
        private http: HttpClient,
    ) { }

    listEntries() {
        return this.http.get(environment.origin + '/entries/')
    }

    getEntry(entryId: number) {
        return this.http.get(environment.origin + '/get-entry/' + entryId + '/')
    }

    createEntry(data) {
        return this.http.post(environment.origin + '/create-entry/', data)
    }

    updateEntry(entry) {
        return this.http.put(environment.origin + '/update-entry/' + entry.pk + '/', entry)
    }

    deleteEntry(entryId: number) {
        return this.http.delete(environment.origin + '/delete-entry/' + entryId + '/')
    }

    temporaryEntry(token) {
        return this.http.get(environment.origin + '/temporary-entry/' + token + '/')
    }

    generateLink(entryId: number) {
        return this.http.get(environment.origin + '/generate-link/' + entryId + '/')
    }
}
