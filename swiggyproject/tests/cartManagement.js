  var Home_page = require("../pageObjects/home_page.js");
  var RestaurantSearch_page = require("../pageObjects/restaurantSearch_page.js");
  var RestaurantItems_page = require("../pageObjects/restaurantItems_page.js");
  var Cart_page = require("../pageObjects/cart_page.js");

    beforeEach(async()  => {
    browser.maximizeWindow();
    await browser.url('/');
});
 

  describe('Cart Management Suite', function () {
     it('Verify Cart is empty upon accessing swiggy for the first time', function(){
        Home_page.setSearchLocation('chennai');
        RestaurantSearch_page.cartButton.waitForDisplayed(6000);
        browser.pause(3000);
        RestaurantSearch_page.clickCartButton();
        browser.pause(3000);
        Cart_page.cartemptyText.waitForDisplayed(3000);
          try {
          expect(Cart_page.getcartText).to.equal("Your cart is empty");
          console.log("Cart is empty displayed successfully");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        }

   }); 
       it('Verify Cart is updated when an Item is added', function(){
         Home_page.setSearchLocation('siruseri');
         RestaurantSearch_page.restaurant.waitForDisplayed(6000);
         browser.pause(3000);
         RestaurantSearch_page.clickRestaurant();
         browser.pause(6000);
         var itemName = RestaurantItems_page.getItemNameText();
         RestaurantItems_page.clickAddItemButton();
         browser.pause(6000);
         RestaurantSearch_page.clickCartButton();
         browser.pause(3000);
           try {
           expect(itemName).to.equal(Cart_page.getitemNameText());
           console.log("Cart Page is updated successfully when an Item is addedd");
        }  catch(err) {
           console.log("Exception: " + err);
           assert.fail();
        } 

   });
  
   it('Verify Cart is updated when an Item is deleted', function(){
        Home_page.setSearchLocation('siruseri');
        RestaurantSearch_page.restaurant.waitForDisplayed(6000);
        browser.pause(3000);
        RestaurantSearch_page.clickRestaurant();
        browser.pause(6000);
        var itemName = RestaurantItems_page.getItemNameText();
        RestaurantItems_page.clickAddItemButton();
        browser.pause(6000);
        RestaurantSearch_page.clickCartButton();
        browser.pause(3000);
        expect(itemName).to.equal(Cart_page.getitemNameText());
        browser.pause(3000);
        Cart_page.clickRemoveButton();
        browser.pause(3000);
          try {
          expect(Cart_page.getcartText()).to.equal("Your cart is empty");
          console.log("Cart Page is updated successfully when an Item is removed");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        } 

   });
   
   it('Verify able to add an Item to cart n number of times', function(){
        //Sample Input 10
        var n = 10;
        Home_page.setSearchLocation('siruseri');
        RestaurantSearch_page.restaurant.waitForDisplayed(6000);
        browser.pause(3000);
        RestaurantSearch_page.clickRestaurant();
        browser.pause(6000);
        var itemName = RestaurantItems_page.getItemNameText();
        RestaurantItems_page.clickAddItemButton();
        browser.pause(6000);
        RestaurantSearch_page.clickCartButton();
        browser.pause(3000);
        expect(itemName).to.equal(Cart_page.getitemNameText());
        browser.pause(3000);
          for (i = 1; i < n; i++) { 
          Cart_page.clickAddButton();
          browser.setTimeout({ 'implicit': 4000 });
          }
        console.log(Cart_page.getIndividualItemCount());
        console.log(n);
          try {
          expect(Cart_page.getIndividualItemCount()).to.equal(n.toString());
          console.log("Cart contains " + n + " items as expected");
        } catch(err) {
          console.log("Exception: " + err);
          assert.fail();
        } 
   });

});
