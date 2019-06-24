var homePage = require("../pageObjects/homepage.js");

beforeEach(async()  => {
	browser.maximizeWindow();
	await browser.url('/');
});

describe('Authentication Suite', function () {

	it('Verify Sign Up page is displayed on clicking SignUp button', function(){
	homePage.clickSignUpButton();
	homePage.signUpHeader.waitForDisplayed(3000);
		try {
				expect(homePage.signUpHeaderText).to.equal("Sign up");
				console.log("Sign Up Page is displayed successfully");
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
	});

	it('Verify Login page is displayed on clicking Login button', function(){
	homePage.clickLogInButton();
	homePage.logInHeader.waitForDisplayed(3000);
		try {
				expect(homePage.logInHeaderText).to.equal("Login");
				console.log("Log In Page is displayed successfully");
			} catch(err) {
				console.log("Exception: " + err);
				assert.fail();
			}
	});

});