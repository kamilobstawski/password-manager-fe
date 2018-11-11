import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions, Headers} from "@angular/http";

import { environment } from "../../environments/environment";

@Injectable()
export class EntryService {
    token: any;
    headers = new HttpHeaders();

    constructor(
        private http: HttpClient,
    ) {
        this.token = localStorage.getItem('token');
    }

    listEntries() {
        return this.http.get(environment.origin + '/entries/', {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }

    getEntry(entryId: number) {
        return this.http.get(environment.origin + '/get-entry/' + entryId + '/', {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }

    createEntry(data) {
        return this.http.post(environment.origin + '/create-entry/', data, {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }

    updateEntry(entry) {
        return this.http.put(environment.origin + '/update-entry/' + entry.pk + '/', entry, {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }

    deleteEntry(entryId: number) {
        return this.http.delete(environment.origin + '/delete-entry/' + entryId + '/', {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }

    temporaryEntry(token) {
        return this.http.get(environment.origin + '/temporary-entry/' + token + '/')
    }

    generateLink(entryId: number) {
        return this.http.get(environment.origin + '/generate-link/' + entryId + '/', {headers: this.headers.set('Authorization', 'JWT ' + this.token)})
    }
}
