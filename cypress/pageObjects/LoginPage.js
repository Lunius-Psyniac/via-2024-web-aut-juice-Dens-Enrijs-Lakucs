import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailTextField() {
    return cy.get("[aria-label='Text field for the login email']");
  }

  static get passwordTextField() {
    return cy.get("[aria-label='Text field for the login password']");
  }

  static get loginButton() {
    return cy.get("[id='loginButton']");
  }

  static get notYetCustomer(){
    return cy.get("[id='newCustomerLink']")
  }
}
