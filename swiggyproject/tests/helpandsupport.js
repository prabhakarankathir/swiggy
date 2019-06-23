var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
	await browser.url('/');
});

describe('Test help page', function () {
    it('Test1: Verify help page is displayed on clicking SignUp button', function(){
        Home_page.setSearchLocation('chennai');
   // try {
      RestaurantSearch_page.helpButton.waitForDisplayed(6000);
      RestaurantSearch_page.clickHelpButton();
      try {
      RestaurantSearch_page.help.waitForDisplayed(6000);
      expect(RestaurantSearch_page.helpText).to.equal("Help & Support");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }

 });
});
