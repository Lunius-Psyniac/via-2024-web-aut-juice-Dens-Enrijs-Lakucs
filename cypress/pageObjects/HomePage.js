import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("[aria-label='Show/hide account menu']")
  }

  static get loginButton(){
    return cy.get("[class='mat-menu-content ng-tns-c129-2']")
  }

  static get userProfile(){
    return cy.get("[aria-label='Go to user profile']")
  }

  static get clickSearchBar(){
    return cy.get("[aria-label='Click to search']")
  }

  static get searchBarTextField(){
    return cy.get("[id='mat-input-0']")
  }

  static get ordersAndPayments(){
    return cy.get("[class='mat-menu-content ng-tns-c129-2']");
  }

  static get savedAddresses(){
    return cy.get("[aria-label='Go to saved address page']");
  }

  static get myPaymentOptions(){
    return cy.get("[aria-label='Go to saved payment methods page']");
  }
}
