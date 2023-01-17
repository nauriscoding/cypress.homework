export default class homepagetest {
    
  homePagelink = "angularpractice/shop";
  productlist = "app-card";
  nameoftheproduct = "h4.card-title";
  buttonaddtocart = "button";
  checkout = "a.nav-link.btn.btn-primary";
  samsung = "h4.media-heading >a";
  quantity = "#exampleInputEmail1";
  countryid = "#country";
  checkbox = ".checkbox";

  //Step 1 = Visit Website

  openhomepage() {
    cy.visit(this.homePagelink);
    cy.url().should("include", "angularpractice/shop");
  }
  //Step 2 = loops trough whole product lists finds samsung and adds to cart

  addtocartSamsung() {
    cy.get(this.productlist).each((product) => {
      cy.wrap(product)
        .find(this.nameoftheproduct)
        .then((productname) => {
          if (productname.text().includes("Samsung Note 8")) {
            cy.wrap(product).find(this.buttonaddtocart).click();
          }
        });
    });
  }

  //Step 3 = Clicks on checkout and checks if we are on correct URL

  clicksoncheckout() {
    cy.get(this.checkout).click();
    cy.url().should("include", "angularpractice/shop");
  }

  //Step 4 = Check if thats a Samsung Note 8 in the cart

  verifyifthatsasamsung() {
    cy.get(this.samsung).should("have.text", "Samsung Note 8");
  }

  //Step 5 = Check if Quantity is 1

  checkquantity() {
    cy.get("#exampleInputEmail1").should("have.value", "1");
  }

  //Step 6 = Click on Checkout

  clickoncheckout() {
    cy.get(".container").contains("Checkout").click();
    cy.url().should("include", "angularpractice/shop");
  }

  //Step 7 = Click on country and get test data information from json file

  clickoncountry(countryname) {
    cy.get(this.countryid).type(countryname);
    cy.wait(7000);
    cy.get(".suggestions").contains("Ireland").click();
    cy.wait(2000);
    cy.get(this.countryid).should("have.value", "Ireland");
  }

  //Step 8 = Click on checkbox

  clickoncheckbos() {
    cy.get(this.checkbox).click();
  }

  //click on purchase button

  clickonpurchase() {
    cy.get(".row").contains("Purchase").click();
  }

  //Step 10 = Check if the alert is the same

  checkalert() {
    cy.get(".alert").should(
      "contain.text",
      "Success! Thank you! Your order will be delivered in next few weeks :-)."
    );
  }
}
