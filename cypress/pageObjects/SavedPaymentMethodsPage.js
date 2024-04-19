import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCard(){
    return cy.get("[class='mat-expansion-panel-header mat-focus-indicator ng-tns-c42-11 ng-tns-c41-10 ng-star-inserted']");
  }

  static get nameTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-12']");
  }

  static get cardNumberTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-13']");
  }

  static get expiryMonthFieldButton(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']");
  }

  static get expiryMonthField(){
    return cy.get('select').eq(0)
  }

  static get expiryYearFieldButton(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-15']");
  }

  static get expiryYearField(){
    return cy.get('select').eq(1)
  }

  static get submitButton(){
    return cy.get("[id='submitButton']");
  }

  static get validateAddedCard(){
    return cy.get("[class='mat-table cdk-table']");
  }
}
