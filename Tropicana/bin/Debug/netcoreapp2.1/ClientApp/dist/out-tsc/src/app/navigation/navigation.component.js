import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
let NavigationComponent = class NavigationComponent {
    constructor(breakpointObserver, router, auth, route) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.notify = "";
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.success === 'true') {
                this.notify = 'You have passed data';
            }
        });
    }
    logout() {
        this.auth.logout();
    }
};
NavigationComponent = __decorate([
    Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.css']
    })
], NavigationComponent);
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map