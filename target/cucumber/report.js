$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amazonTitle.feature");
formatter.feature({
  "name": "amazon title",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenario({
  "name": "amazon title verification",
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
  "name": "user should be able to see the title of application",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonTitle_steps.user_should_be_able_to_see_the_title_of_application()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.AmazonTitle_steps.user_should_be_able_to_see_the_title_of_application(AmazonTitle_steps.java:20)\n\tat ✽.user should be able to see the title of application(src/test/resources/features/amazonTitle.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
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