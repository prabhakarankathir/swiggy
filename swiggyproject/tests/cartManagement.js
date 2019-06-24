  var homePage = require("../pageObjects/homepage.js");
  var restaurantSearchPage = require("../pageObjects/restaurantsearchpage.js");
  var restaurantItemsPage = require("../pageObjects/restaurantitemspage.js");
  var cartPage = require("../pageObjects/cartpage.js");

    beforeEach(async()  => {
    browser.maximizeWindow();
    await browser.url('/');
   
});
    afterEach(function() {
      browser.reloadSession();
    });
   
function navigateToRestaurant(location) {
    homePage.setSearchLocation(location);
     restaurantSearchPage.restaurant.waitForDisplayed(6000);
     restaurantSearchPage.clickRestaurant();
 }

  describe('Cart Management Suite', function () {
     it('Verify Cart is empty upon accessing swiggy for the first time', function(){
        homePage.setSearchLocation('chennai');
        restaurantSearchPage.cartButton.waitForDisplayed(6000);
        restaurantSearchPage.clickCartButton();
        cartPage.cartemptyText.waitForDisplayed(3000);
          try {
          expect(cartPage.getcartText()).to.equal("Your cart is empty");
          console.log("Cart is empty displayed successfully");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        }

   }); 
       it('Verify Cart is updated when an Item is added', function(){
         navigateToRestaurant('siruseri');
         var itemName = restaurantItemsPage.getItemNameText();
         restaurantItemsPage.clickAddItemButton();
         restaurantSearchPage.clickCartButton();
           try {
           expect(itemName).to.equal(cartPage.getitemNameText());
           console.log("Cart Page is updated successfully when an Item is addedd");
        }  catch(err) {
           console.log("Exception: " + err);
           assert.fail();
        } 

   });
  
   it('Verify Cart is updated when an Item is deleted', function(){
        navigateToRestaurant('siruseri');
        var itemName = restaurantItemsPage.getItemNameText();
        restaurantItemsPage.clickAddItemButton();
        restaurantSearchPage.clickCartButton();
        expect(itemName).to.equal(cartPage.getitemNameText());
        cartPage.clickRemoveButton();
        
          try {
          expect(cartPage.getcartText()).to.equal("Your cart is empty");
          console.log("Cart Page is updated successfully when an Item is removed");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        } 

   });
   
   it('Verify able to add an Item to cart n number of times', function(){
        //Sample Input 10
        var n = 10;
        navigateToRestaurant('siruseri');
        var itemName = restaurantItemsPage.getItemNameText();
        restaurantItemsPage.clickAddItemButton();
        restaurantSearchPage.clickCartButton();
        cartPage.itemName.waitForDisplayed(3000)
        expect(itemName).to.equal(cartPage.getitemNameText());
          for (i = 1; i < n; i++) { 
          cartPage.clickAddButton();
          browser.setTimeout({ 'implicit': 6000 });
          }
          try {
          expect(cartPage.getIndividualItemCount()).to.equal(n.toString());
          console.log("Cart contains " + n + " items as expected");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        } 
   });

});
