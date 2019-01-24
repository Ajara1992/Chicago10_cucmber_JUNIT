$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amazonTitle.feature");
formatter.feature({
  "name": "amazon title",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "amazon url verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to amazon  application",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonTitle_steps.user_goes_to_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate url",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonTitle_steps.user_should_validate_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});