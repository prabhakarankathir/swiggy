	class RestaurantSearch_page {
	get searchButton() { return $("a[class='_1T-E4'][href='/search']")}
	get searchBar() { return $("input[class='_2BJMh']")}
	get offersButton() { return $("a[class='_1T-E4'][href='/offers/restaurant']")}
	get offers() { return $("div[class='D-teR']")}
	get helpButton() { return $("a[class='_1T-E4'][href='/support']")}
	get help() { return $("div[class='_2qu87']")}

	clickSearchButton() {
			return this.searchButton.click();
		}
	clickOffersButton() {
		return this.offersButton.click();
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