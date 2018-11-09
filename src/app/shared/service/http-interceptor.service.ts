import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SharedService} from '../../auth/service/shared.service';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private shareService: SharedService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenizeReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.shareService.getValue() ) });
        return next.handle(tokenizeReq);
    }
}
