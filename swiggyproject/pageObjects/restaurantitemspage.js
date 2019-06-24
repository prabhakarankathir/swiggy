class RestaurantItemspage {
	get addItemButton() { return $("#h-1950595611 > div:nth-child(3) > div:nth-child(1) > div > div.JWyJG > div._33Hf_._3L1X9 > div._1RPOp");}
	get ItemName() { return $("#h-1950595611 > div:nth-child(3) > div:nth-child(1) > div > div._2tcDp > div > div > div._2SyqU")}

	clickAddItemButton() {
	return this.addItemButton.click();
	browser.pause(6000);
	}

	getItemNameText() {
	browser.pause(6000);
	return this.ItemName.getText();
	}
}
module.exports = new RestaurantItemspage();