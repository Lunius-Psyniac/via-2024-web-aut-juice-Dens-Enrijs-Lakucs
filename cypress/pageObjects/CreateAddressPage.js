import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get countryTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-10']");
  }

  static get nameTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-11']");
  }

  static get mobileNumberTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-12']");
  }

  static get zipCodeTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-13']");
  }

  static get addressTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']");
  }

  static get cityTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-15']");
  }

  static get stateTextField(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-16']");
  }

  static get submitButton(){
    return cy.get("[id='submitButton']");
  }
}
