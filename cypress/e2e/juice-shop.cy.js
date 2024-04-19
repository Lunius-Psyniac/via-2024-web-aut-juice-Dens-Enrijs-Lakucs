import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SearchPage } from "../pageObjects/SearchPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailTextField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordTextField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfile.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const x = Math.floor(Math.random() * 10000);
      // Save that email address to some variable
      const email = "email_" + x.toString() + "@ebox.com";
      RegisterPage.emailTextField.type(email);
      // Fill in password field and repeat password field with same password
      RegisterPage.passwordTextField.type("qwerty123");
      RegisterPage.repeatPasswordTextField.type("qwerty123");
      // Click on Security Question menu
      RegisterPage.securityQuestionsDropdown.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.securityQuestionsSelect.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegisterPage.securityQuestionsAnswer.type("Doggo");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailTextField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordTextField.type("qwerty123");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfile.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for Lemon
      HomePage.searchBarTextField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      SearchPage.selectProductCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.validateProductCard.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for 500ml
      HomePage.searchBarTextField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      SearchPage.selectProductCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.validateProductCard.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for 500ml
      HomePage.searchBarTextField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      SearchPage.selectProductCard.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      SearchPage.validateProductCard.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      SearchPage.closeProductCard.click();
      // Select a product card - Lemon Juice (500ml)
      SearchPage.selectProductCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.validateProductCard.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      SearchPage.closeProductCard.click();
      // Select a product card - Strawberry Juice (500ml)
      SearchPage.selectProductCard.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      SearchPage.validateProductCard.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for King
      HomePage.searchBarTextField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      SearchPage.selectProductCard.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(100);
      SearchPage.openReviews.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      SearchPage.validateReviews.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for Raspberry
      HomePage.searchBarTextField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      SearchPage.selectProductCard.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      cy.wait(500);
      SearchPage.reviewTextField.type("Tastes like metal");
      // Click Submit
      SearchPage.submitReviewButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(200);
      SearchPage.openReviews.click();
      // Validate review -  "Tastes like metal"
      cy.wait(200);
      SearchPage.validateReviews.should("contain.text", "Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      SearchPage.visit();
      // Validate that the default amount of cards is 12
      SearchPage.validateCardAmount.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      cy.wait(500);
      SearchPage.cardAmountButton.click();
      SearchPage.cardAmountDropdown.contains("24").click();
      // Validate that the amount of cards is 24
      SearchPage.validateCardAmount.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      SearchPage.cardAmountButton.click();
      SearchPage.cardAmountDropdown.contains("36").click();
      // Validate that the amount of cards is 35
      SearchPage.validateCardAmount.should("have.length", 35);
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.clickSearchBar.click();
      // Search for Girlie
      HomePage.searchBarTextField.type("Girlie{enter}");
      // Add to basket "Girlie"
      SearchPage.addToBasket.click();
      // Click on "Your Basket" button
      SearchPage.openYourBasket.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.goToCheckout.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddress.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.selectDeliverySpeed.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectPaymentCard("5678").click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.validateOrderCompletion.should("contain.text", "Thank you for your purchase!");
    });


    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPayments.contains("Orders & Payment").click();
      // Click on My saved addresses
      HomePage.savedAddresses.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddress.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryTextField.type("Latvia");
      CreateAddressPage.nameTextField.type("Dens Lakucs");
      CreateAddressPage.mobileNumberTextField.type("29999999");
      CreateAddressPage.zipCodeTextField.type("LV-0000");
      CreateAddressPage.addressTextField.type("Rigas iela 1");
      CreateAddressPage.cityTextField.type("Valmiera");
      CreateAddressPage.stateTextField.type("of constant anxiety");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressesPage.validateAddedAddress.should("contain.text", "Dens Lakucs");
    });

    // Create scenario - Add payment option
    it("Add payment option", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPayments.contains("Orders & Payment").click();
      // Click on My payment options
      HomePage.myPaymentOptions.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCard.click();
      // Fill in Name
      SavedPaymentMethodsPage.nameTextField.type("Dens Lakucs");
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNumberTextField.type("1234567890123456");
      // Set expiry month to 7
      SavedPaymentMethodsPage.expiryMonthFieldButton.click();
      SavedPaymentMethodsPage.expiryMonthField.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.expiryYearFieldButton.click();
      SavedPaymentMethodsPage.expiryYearField.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.validateAddedCard.should("contain.text", "3456")
    });
  });
});
