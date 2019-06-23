class Home_Page {
	get signUpButton() { return $("a[class='r2iyh']");}
	get logInButton() { return $("a[class='x4bK8']");}
	get signUpHeader() { return $("div[class='_1Tg1D']")}
	get logInHeader() { return $("div[class='_1Tg1D']")}
	get search() { return $("input[class='_381fS _1oTLG _3BIgv']")}
	//get searchResult() { return $("div[class='_3lmRa']:nth-child(1)")}
	///get searchResult() { return $("div[class='_1oLDb'] div:nth-child(1)")}
	get searchResult() { return $("div[class^='_3lmRa']")}

	get signUpHeaderText() {
		return this.signUpHeader.getText();
	}
	get logInHeaderText() {
		return this.logInHeader.getText();
	}
	clickSignUpButton() {
		return this.signUpButton.click();
	}
	clickLogInButton() {
		return this.logInButton.click();
	}
    setSearch(search) {
    	return this.search.setValue(search);
    }
    setSearchLocation(search) {
    	this.search.waitForDisplayed(3000);
    	this.search.setValue(search);
    	browser.pause(4000);
		//this.searchResult.waitForDisplayed(6000);
	return this.searchResult.click();

    	    }
	
}

module.exports = new Home_Page();