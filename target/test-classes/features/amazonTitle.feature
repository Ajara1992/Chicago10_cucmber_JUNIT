@amazon
Feature:  amazon title
  # whatever the comment here

  Scenario: amazon title verification

    When user goes to amazon  application
    Then user should be able to see the title of application


    Scenario: amazon url verification
      When user goes to amazon  application
      Then user should validate url
