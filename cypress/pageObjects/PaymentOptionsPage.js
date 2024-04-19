import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static selectPaymentCard(int){
    return cy.get("[class='mat-row cdk-row ng-star-inserted']")
    .contains(int)
    .parent('mat-row')
    .find('.mat-radio-button');
  }

  static get continueButton(){
    return cy.get("[aria-label='Proceed to review']");
  }
}