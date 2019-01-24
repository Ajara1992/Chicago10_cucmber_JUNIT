@datatables
Feature: Testing datatables website

  Scenario: Testing adding new employee to the table
    Given user is on the datatables homepage
    And user click to new button
    Then user shoiuld see create New Entry box
    And user should enter firstname
    And user should enter lastname
    And user should enter position
    And user should enter office
    And user should enter extention
    And user should enter start date
    And user should enter salary
    Then user should click to create button
    Then user enters first name to search box
    Then User should see first name is inserted in the table