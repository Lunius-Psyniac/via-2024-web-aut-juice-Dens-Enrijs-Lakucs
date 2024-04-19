import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addNewAddress(){
    return cy.get("[aria-label='Add a new address']");
  }

  static get validateAddedAddress(){
    return cy.get("[class='mat-table cdk-table ng-star-inserted']");
  }
}
