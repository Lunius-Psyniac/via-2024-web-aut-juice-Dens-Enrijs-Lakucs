import { BasePage } from "../pageObjects/basePage";

export class SearchPage extends BasePage {
    static get url() {
        return "/#/search";
    }

    static get selectProductCard() {
        return cy.get("[class='mat-grid-list']");
    }

    static get validateProductCard() {
        return cy.get("[class='mat-dialog-content']");
    }

    static get closeProductCard() {
        return cy.get("[aria-label='Close Dialog']");
    }

    static get openReviews() {
        return cy.get("[id='mat-expansion-panel-header-0']");
    }

    static get validateReviews() {
        return cy.get("[class='mat-expansion-panel-body ng-tns-c41-13']");
    }

    static get reviewTextField() {
        return cy.get("[class='mat-form-field-infix ng-tns-c22-15']");
    }

    static get submitReviewButton() {
        return cy.get("[id='submitButton']");
    }

    static get validateCardAmount() {
        return cy.get("[class='item-name']");
    }

    static get cardAmountButton() {
        return cy.get("[role='combobox']");
    }

    static get cardAmountDropdown() {
        return cy.get("[aria-label='Items per page:']");
    }

    static get addToBasket(){
        return cy.get("[aria-label='Add to Basket']");
    }

    static get openYourBasket(){
        return cy.get("[aria-label='Show the shopping cart']");
    }
}