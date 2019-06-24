var homePage = require("../pageObjects/homepage.js");
var restaurantSearchPage = require("../pageObjects/restaurantsearchpage.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Offers & Discounts', function () {

    it('Test1: Verify Offers page is displayed on clicking offers button', function(){
      homePage.setSearchLocation('chennai');
      restaurantSearchPage.offersButton.waitForDisplayed(6000);
      restaurantSearchPage.clickOffersButton();
      restaurantSearchPage.offers.waitForDisplayed(6000);
      try {
      expect(restaurantSearchPage.offersText).to.equal("Offers for you");
      console.log("Offers Page is displayed successfully");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }
});

});