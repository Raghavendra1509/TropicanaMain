import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppHttpInterceptor = class AppHttpInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const responseType = request.responseType || 'json';
        const apiToken = localStorage.getItem('Authorization');
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && apiToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${apiToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            });
        }
        // add authorization header with jwt token if available
        //let currentUser = this.authenticationService.currentUserValue;
        //if (currentUser && currentUser.token) {
        //  request = request.clone({
        //    setHeaders: {
        //      Authorization: `Bearer ${currentUser.token}`
        //    }
        //  });
        //}
        return next.handle(request);
    }
};
AppHttpInterceptor = __decorate([
    Injectable()
], AppHttpInterceptor);
export { AppHttpInterceptor };
//# sourceMappingURL=http.interceptor.js.map