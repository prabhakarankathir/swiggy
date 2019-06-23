var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
  browser.maximizeWindow();
	await browser.url('/');
});

describe('Search Restaurants and Dishes', function () {
    
    it('Verify Search Bar is displayed on clicking Search button', function(){
      Home_page.setSearchLocation('chennai');
      RestaurantSearch_page.searchButton.waitForDisplayed(4000);
      RestaurantSearch_page.clickSearchButton();
      RestaurantSearch_page.searchBar.waitForDisplayed(3000);
      let isDisplayed = RestaurantSearch_page.searchBar.isDisplayed();
     try {
         expect(isDisplayed).to.equal(true);
         console.log("Search Bar is displayed successfully");
     } catch(err) {
         console.log("Exception: " + err);
         assert.fail();
     }

 });
});
