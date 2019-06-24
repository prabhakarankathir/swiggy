var homePage = require("../pageObjects/homepage.js");
var restaurantSearchPage = require("../pageObjects/restaurantsearchpage.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Search Restaurants and Dishes', function () {
    
    it('Verify Search Bar is displayed on clicking Search button', function(){
      homePage.setSearchLocation('chennai');
      restaurantSearchPage.searchButton.waitForDisplayed(4000);
      restaurantSearchPage.clickSearchButton();
      restaurantSearchPage.searchBar.waitForDisplayed(3000);
      let isDisplayed = restaurantSearchPage.searchBar.isDisplayed();
     try {
         expect(isDisplayed).to.equal(true);
         console.log("Search Bar is displayed successfully");
     } catch(err) {
         console.log("Exception: " + err);
         assert.fail();
     }

 });
});
