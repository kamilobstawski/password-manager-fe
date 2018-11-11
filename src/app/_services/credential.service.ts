import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { User } from '../_models/index';

@Injectable()
export class CredentialService {

    constructor(
        private http: HttpClient,
    ) { }

    login(user: User) {
        return this.http.post(environment.origin + '/login/', user)
    }

}
