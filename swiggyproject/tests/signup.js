var Home_page = require("../pageObjects/home_page.js");

beforeEach(async()  => {
	await browser.url('/');
});

describe('Test Sign Up page', function () {

it('Test1: Verify Sign Up page is displayed on clicking SignUp button', function(){
Home_page.clickSignUpButton();

	try {
		Home_page.signUpHeader.waitForDisplayed(3000);
			expect(Home_page.signUpHeaderText).to.equal("Sign up");
		} catch(err) {
			console.log("Exception: " + err);
			assert.fail();
		}
});

});