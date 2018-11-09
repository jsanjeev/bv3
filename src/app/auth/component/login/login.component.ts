import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading = false;
    user: any = {
        username: '',
        password: ''
    };

    constructor(private authService: AuthService, private _router: Router) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this._router.navigate(['']);
        }
    }

    async onSubmit() {
        const response = await this.authService.login(this.user);
        console.log('Success:::', response);
    }

}
