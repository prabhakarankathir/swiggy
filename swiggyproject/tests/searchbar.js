var Home_page = require("../pageObjects/home_page.js");
var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");

beforeEach(async()  => {
	await browser.url('/');
});

describe('Test Search Bar', function () {
    it('Test1: Verify Sign Up page is displayed on clicking SignUp button', function(){
        Home_page.setSearchLocation('chennai');
   // try {
      RestaurantSearch_page.searchButton.waitForDisplayed(6000);
      RestaurantSearch_page.clickSearchButton();
      RestaurantSearch_page.searchBar.waitForDisplayed(3000);
      let isDisplayed = RestaurantSearch_page.searchBar.isDisplayed();
      browser.pause(6000);
      try {
         expect(isDisplayed).to.equal(true);
     } catch(err) {
         console.log("Exception: " + err);
         assert.fail();
     }

 });
});
