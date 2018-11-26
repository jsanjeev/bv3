import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { SharedService } from './shared.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = environment.apiHost;

    constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {
    }

    isLoggedIn() {
        return (this.sharedService.getValue() && this.sharedService.getValue().token !== '');
    }

    login(user) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.baseUrl}/pe_users/userLogin`, user).subscribe((res) => {
                if (res['data'] && res['data']['token']) {
                    this.sharedService.setCredentials(res['data']);
                    this.router.navigate(['dashboard']);
                    resolve(res['data']['token']);
                } else {
                    reject(null);
                }
            });
        })
    }

    checkLogin(user) {
        return this.http.post(`${this.baseUrl}/pe_users/checkLogin`, user);
    }
}
