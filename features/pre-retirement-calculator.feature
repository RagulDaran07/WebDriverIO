Feature: Pre-Retirement Calculator

Scenario Outline: User should be able to submit form with all required fields
    Given user on the page <url>
    When user enter the details on all required fields <Current Age> <Retirement Age> <Current Annual Income> <Spouse's Annual income> <Current Retirement Savings> <Current Retirement Contribution> <Annual Retirement Contribution Increase>
    And user clicks the calculate button
    Then user see the results

    Examples:
    |url                                                               |Current Age|Retirement Age|Current Annual Income|Spouse's Annual income|Current Retirement Savings|Current Retirement Contribution|Annual Retirement Contribution Increase|
    |https://www.securian.com/insights-tools/retirement-calculator.html|40         |68            |100000               |75000                 |500000                    |10                             |2                                      |
