const { Given, When, Then } = require('@wdio/cucumber-framework');
const RetirementPage = require('../pageobjects/retirement.page');

Given(/^user on the page (.*)$/, async (url) => {
	await browser.url(url)
      await browser.maximizeWindow()
});

When(/^user enter the details on all required fields (.*) (.*) (.*) (.*) (.*) (.*) (.*)$/, async (currentAge, retirementAge,currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate) => {
      await RetirementPage.retirementDetails(currentAge,retirementAge, currentIncome, spouseIncome,currentTotalSavings, currentAnnualSavings,savingsIncreaseRate)
});

When('user clicks the calculate button', async function () {
        await RetirementPage.clickCalculate()
  });

Then('user see the results', async function () {
       await RetirementPage.verifyResults()
  });