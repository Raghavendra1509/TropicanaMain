import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AppConstants } from './../constants/app.constants';
let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.getAccountDetailsAPI = AppConstants.apiUrlGetAccountDetails;
    }
    getAccountDetails() {
        return this.http.get(this.getAccountDetailsAPI);
    }
};
AccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map