import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DetailsComponent = class DetailsComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.displayedColumns = ['id', 'userId', 'accountNumber', 'firstName', 'address'];
    }
    ngOnInit() {
        this.accountList = [];
        this.getAccounts();
    }
    getAccounts() {
        this.accountService.getAccountDetails().subscribe((data) => {
            this.accountList.push(data);
        }, error => {
            console.log('error', error);
        });
    }
};
DetailsComponent = __decorate([
    Component({
        selector: 'app-details',
        templateUrl: './details.component.html',
        styleUrls: ['./details.component.css']
    })
], DetailsComponent);
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map