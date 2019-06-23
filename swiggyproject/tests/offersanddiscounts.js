var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Offers & Discounts', function () {

    it('Test1: Verify Offers page is displayed on clicking offers button', function(){
      Home_page.setSearchLocation('chennai');
      RestaurantSearch_page.offersButton.waitForDisplayed(6000);
      RestaurantSearch_page.clickOffersButton();
      RestaurantSearch_page.offers.waitForDisplayed(6000);
      try {
      expect(RestaurantSearch_page.offersText).to.equal("Offers for you");
      console.log("Offers Page is displayed successfully");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }
});

});