import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad} from '@angular/router';
import {Observable, of as observableOf} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private router: Router, public authService: AuthService) {

    }

    canLoad(): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.authService.isAuthenticatedUser()) {
            this.router.navigate(['/login']);
            return observableOf(false);
        } else {
            return observableOf(true);
        }
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuthenticatedUser()) {
            this.router.navigate(['/login']);
            return observableOf(false);
        } else {
            return observableOf(true);
        }
    }
}
