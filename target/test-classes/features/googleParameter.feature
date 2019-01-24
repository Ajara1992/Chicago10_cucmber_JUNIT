@googleParameter
Feature: Google search functionality
  Scenario: Testing google search
    Given user is on the homepage of google
    When user enters "Flowers"
    Then user should see "flowers" in the title