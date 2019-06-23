var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
	await browser.url('/');
});

describe('Test offers page', function () {
    it('Test1: Verify offers page is displayed on clicking SignUp button', function(){
        Home_page.setSearchLocation('chennai');
   // try {
      RestaurantSearch_page.offersButton.waitForDisplayed(6000);
      RestaurantSearch_page.clickOffersButton();
      
     try {
      RestaurantSearch_page.offers.waitForDisplayed(6000);
      expect(RestaurantSearch_page.offersText).to.equal("Offers for you");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }




 });
});