import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SignupComponent = class SignupComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
        this.submitted = true;
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map