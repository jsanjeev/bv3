import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

const APP_TITLE = '';
const SEPARATOR = ' > ';

@Injectable({
    providedIn: 'root'
})
export class TitleService {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) {
    }

    static ucFirst(string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    init() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            switchMap(route => route.data),
            map((data) => {
                if (data.title) {
                    return data.title;
                } else {
                    return this.router.url.split('/').reduce((acc, frag) => {
                        if (acc && frag) {
                            acc += SEPARATOR;
                        }
                        return this.router.url.split('/').reduce((acc1, frag1) => {
                            if (acc1 && frag1) {
                                acc1 += SEPARATOR;
                            }
                            return acc1 + TitleService.ucFirst(frag1);
                        });
                    });
                }
            })
        ).subscribe((pathString) => this.titleService.setTitle(`${APP_TITLE} ${pathString}`));
    }
}
