import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get passwordTextField() {
        return cy.get("[class='mat-form-field-infix ng-tns-c22-14']");
    }

    static get repeatPasswordTextField() {
        return cy.get("[class='mat-form-field-infix ng-tns-c22-15']");
    }

    static get securityQuestionsDropdown() {
        return cy.get("[aria-label='Selection list for the security question']")
    }

    static get securityQuestionsSelect() {
        return cy.get("[class='mat-option-text']")
    }

    static get securityQuestionsAnswer() {
        return cy.get("[class='mat-form-field-infix ng-tns-c22-18']")
    }

    static get emailTextField(){
        return cy.get("[aria-label='Email address field']")
    }

    static get registerButton(){
        return cy.get("[id='registerButton']")
    }
}