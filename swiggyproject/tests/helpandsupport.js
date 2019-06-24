var homePage = require("../pageObjects/homepage.js");
var restaurantSearchPage = require("../pageObjects/restaurantsearchpage.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Help & Support Feature Suite', function () {
    
    it('Verify Help page is displayed on clicking Help button', function(){
      homePage.setSearchLocation('chennai');
      restaurantSearchPage.helpButton.waitForDisplayed(4000);
      restaurantSearchPage.clickHelpButton();
      restaurantSearchPage.help.waitForDisplayed(4000);
      try {
      expect(restaurantSearchPage.helpText).to.equal("Help & Support");
      console.log("Help Page is displayed successfully");
    } catch(err) {
      console.log("Exception: " + err);
      assert.fail();
    }
});

});
