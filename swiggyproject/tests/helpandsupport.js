var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Help & Support Feature Suite', function () {
    
    it('Verify Help page is displayed on clicking Help button', function(){
      Home_page.setSearchLocation('chennai');
      RestaurantSearch_page.helpButton.waitForDisplayed(4000);
      RestaurantSearch_page.clickHelpButton();
      RestaurantSearch_page.help.waitForDisplayed(4000);
      try {
      expect(RestaurantSearch_page.helpText).to.equal("Help & Support");
      console.log("Help Page is displayed successfully");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }
});

});
