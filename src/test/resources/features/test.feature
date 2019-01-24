Feature: this my first Feature
  # whatever the comment here
  @google
  Scenario: Google search scenario

    When user goes to google application
    Then user searches for apple
    And user should see apple related results
