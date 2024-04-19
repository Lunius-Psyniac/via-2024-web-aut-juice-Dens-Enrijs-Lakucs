import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get selectDeliverySpeed(){
    return cy.get("[class='mat-row cdk-row ng-star-inserted']");
  }

  static get continueButton(){
    return cy.get("[aria-label='Proceed to delivery method selection']");
  }
}