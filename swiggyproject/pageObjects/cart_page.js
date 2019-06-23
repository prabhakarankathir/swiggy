class Cart_Page {
	get cartemptyText() { return $("div[class='_3Y9ZP']")}
	get itemName() { return $("div[class='_33KRy']")}
	get addButton() {return $("div[class='_1ds9T']")}
	get removeButton() { return $("div[class='_29Y5Z']")}
	get individualItemCount() { return $("div[class='_2zAXs']")}

	getcartText() {
		return this.cartemptyText.getText();
	}

	 getitemNameText() {
		return this.itemName.getText();
	}

	clickRemoveButton() {
		return this.removeButton.click();
	}

	clickAddButton() {
		return this.addButton.click();
	}
	
	getIndividualItemCount() {
		return this.individualItemCount.getText();
	}
}
module.exports = new Cart_Page();