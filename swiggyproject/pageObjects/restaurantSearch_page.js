class RestaurantSearch_page {
	get searchButton() { return $("a[class='_1T-E4'][href='/search']")}
	get searchBar() { return $("input[class='_2BJMh']")}
	get offersButton() { return $("a[class='_1T-E4'][href='/offers/restaurant']")}
	get offers() { return $("div[class='D-teR']")}
	get helpButton() { return $("a[class='_1T-E4'][href='/support']")}
	get help() { return $("div[class='_2qu87']")}
	get cartButton() { return $("a[class='_1T-E4'][href='/checkout']")}
    get restaurant() { return $("#filter_320 > div._2DF5K > div:nth-child(1) > div:nth-child(1) > a > div > div._3FR5S > div._3Ztcd > div.nA6kb")}

	clickSearchButton() {
			return this.searchButton.click();
	}
	
	clickOffersButton() {
		return this.offersButton.click();
	}
	
	clickCartButton() {		
		browser.pause(6000);	
		return this.cartButton.click();
	}
	
	clickRestaurant() {	
		browser.pause(6000);
		return this.restaurant.click();
	}
	
	get offersText() {
			return this.offers.getText();
	}

	clickHelpButton() {
		return this.helpButton.click();
	}
	
	get helpText() {
			return this.help.getText();
	}
}
module.exports = new RestaurantSearch_page();