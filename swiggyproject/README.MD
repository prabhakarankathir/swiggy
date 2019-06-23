# Swiggy-Test Automation

Swiggy-Test Automation project uses mocha framework and webdriver io and covers basic navigation, feature testing and performance testing. We have Allure and dot reports which represents the details of the test run. We have breaken down the features of swiggy as below.

## Features that can be Automated
- Authentication.
- Delivery Address Management.
- Cart Management.
- Order Management.
- Swiggy POP.
- Search Feature.
- Offers/Discount Management.

## Features Difficult/ Cannot be Automated
- Help & Support Feature.
- Payment Methods.
- Liver Order Tracking.

## Requirements

In order to utilise this project you need to have the following installed locally:

- Java 1.8
- npm 6.4.1

## Usage

To Run the project first navigate into the "swiggyproject" folder and run the below command to Install all the packages listed in package.json automatically.

`npm install`

To Run all tests navigate to "swiggyproject" folder and run the below command to trigger all tests.

`npm test`

To Run specific test navigate to "swiggyproject" folder and replace the "name" with filename of the test which you want to run.

`npm test -- --spec=tests/"name".js`

## Reports

Reports for all test run will be available in allure-report folder.
Use the below command to generate and view allure reports.

`./node_modules/.bin/allure generate "path to project"/swiggyproject/allure-results && allure open`

Replace "path to project" with the project file path.