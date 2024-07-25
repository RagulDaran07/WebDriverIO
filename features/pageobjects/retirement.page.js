const { Key } = require ('webdriverio');

class RetirementPage {
    get currentAge(){
        return $('#current-age')
    }

    get retirementAge(){
        return $('#retirement-age')
    }

    get currentAnnualIncome(){
        return $('#current-income')
    }

    get spouseAnnualIncome(){
        return $('#spouse-income')
    }

    get currentRetirementSavings(){
        return $('#current-total-savings')
    }

    get currentRetirementContribution(){
        return $('#current-annual-savings')
    }

    get annualRetirementContributionIncrease(){
        return $('#savings-increase-rate')
    }

    get calculateBtn(){
        return $('button[onclick = "calculateResults();"]')
    }

    get resultMessage(){
        return $('div[id = "calculator-results-container"]')
    }

    async retirementDetails(currentAge, retiremnetAge, currentIncome, spouseIncome, currentTotalSavings, currentAnnualSavings, savingsIncreaseRate){
        await this.currentAge.setValue(currentAge);
        await this.retirementAge.setValue(retiremnetAge);

        await browser.keys([Key.Tab])
        await this.currentAnnualIncome.setValue(currentIncome)

        await browser.keys([Key.Tab])
        await this.spouseAnnualIncome.setValue(spouseIncome)

        await browser.keys([Key.Tab])
        await browser.keys([Key.Tab])
        await this.currentRetirementSavings.setValue(currentTotalSavings)

        await this.currentRetirementContribution.setValue(currentAnnualSavings)
        await this.annualRetirementContributionIncrease.setValue(savingsIncreaseRate)
    }

    async clickCalculate(){
        const element = await this.calculateBtn
        await element.waitForClickable({ timeout: 3000 });
        await element.click()

    }

    async verifyResults(){
        const result = await this.resultMessage
        await result.waitForDisplayed({ timeout: 3000 });
        await expect(result).toHaveTextContaining('Results')
    }
}

module.exports = new RetirementPage()