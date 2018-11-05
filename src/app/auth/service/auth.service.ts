import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import {SharedService} from './shared.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = environment.apiHost;

    constructor(private http: HttpClient, private sharedService: SharedService) {
        const user = sharedService.getValue();
        this.checkLogin(user);
    }

    isAuthenticatedUser() {
        if (this.sharedService.getValue().username && this.sharedService.getValue().username !== '') {
            return true;
        }
        return false;
    }

    login(user) {
        return this.http.post(`${this.baseUrl}/pe_users/userLogin`, user);
    }

    checkLogin(user) {
        return this.http.post(`${this.baseUrl}/pe_users/checkLogin`, user).subscribe((response) => {
            console.log(JSON.stringify(response));
        });
    }
}
