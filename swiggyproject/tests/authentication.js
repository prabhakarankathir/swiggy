var Home_page = require("../pageObjects/home_page.js");

beforeEach(async()  => {
	browser.maximizeWindow();
	await browser.url('/');
});

describe('Authentication Suite', function () {

	it('Verify Sign Up page is displayed on clicking SignUp button', function(){
	Home_page.clickSignUpButton();
	Home_page.signUpHeader.waitForDisplayed(3000);
		try {
				expect(Home_page.signUpHeaderText).to.equal("Sign up");
				console.log("Sign Up Page is displayed successfully");
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
	});

	it('Verify Login page is displayed on clicking Login button', function(){
	Home_page.clickLogInButton();
	Home_page.logInHeader.waitForDisplayed(3000);
		try {
				expect(Home_page.logInHeaderText).to.equal("Login");
				console.log("Log In Page is displayed successfully");
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
	});

});