///<reference types='Cypress'/>

import homepagetest from "../../objects/homepage";
const page = new homepagetest();

describe("ProtoCommerce", function () {

  //imports json files

  before(function () {
    cy.fixture("testdata").then(function(data) {
      this.data = data;
    });
  });

  it("buy items", function () {
    
    //Step 1 = Visit Website 
    page.openhomepage();
    //Step 2 = Loops trough whole product lists finds samsung and adds to cart
    page.addtocartSamsung();
    //Step 3 = Clicks on checkout 
    page.clicksoncheckout();
    //Step 4 = Check if thats a Samsung Note 8 in the cart
    page.verifyifthatsasamsung();
    //Step 5 = Check if Quantity is 1
    page.checkquantity();
    //Step 6 = Click on Checkout
    page.clickoncheckout();
    //Step 7 = Click on country and get test data information from .json file
    page.clickoncountry(this.data.country);
    //Step 8 = Click on checkbox
    page.clickoncheckbos();
    //Step 9 = Click on purchase button
    page.clickonpurchase();
    //Step 10 = Check if the alert is the same
    page.checkalert();
  });
});
