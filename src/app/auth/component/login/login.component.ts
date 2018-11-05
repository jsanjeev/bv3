import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading = false;
    user: any = {
        email: '',
        password: ''
    };

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.login(this.user).subscribe((response) => {
            // console.log(JSON.stringify(response));
        });
    }

}
