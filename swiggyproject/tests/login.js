var Home_page = require("../pageObjects/home_page.js");

beforeEach(async()  => {
	await browser.url('/');
});

describe('Test Login page', function () {

it('Test1: Verify Login page is displayed on clicking Login button', function(){
Home_page.clickLogInButton();
Home_page.logInHeader.waitForDisplayed(3000);
	try {
			expect(Home_page.logInHeaderText).to.equal("Login");
		} catch(err) {
			console.log("Exception: " + err);
			assert.fail();
		}
});

});